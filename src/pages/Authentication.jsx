import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { passwordUser } from './changePassword';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const mode = 'login';

  if (mode !== 'login') {
    throw json({ message: 'Unsupported mode.' }, { status: 422 });
  }

  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  
  if (passwordUser.value !== 'banana') {
    
    if (password === passwordUser.value) {
      
      return performLogin(email, 'changeme');
    } else {
      
      console.error('Password does not match');
      throw json({ message: 'Wrong password.' }, { status: 401 });
    }
  }


  return performLogin(email, password);
}

async function performLogin(email, password) {
  const loginUrl = 'https://api.escuelajs.co/api/v1/auth/login';

  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login failed:', errorData.message);
      throw new Error('Login failed');
    }

    const { access_token, refresh_token } = await response.json();

    localStorage.setItem('accessToken', access_token);
    localStorage.setItem('refreshToken', refresh_token);

    return redirect('/');
  } catch (error) {
    console.error('Error during login:', error.message);
    throw json({ message: 'Wrong email or password.' }, { status: 401 });
  }
}
