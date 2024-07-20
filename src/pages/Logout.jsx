import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('accessToken');
  return redirect('/login');
}
