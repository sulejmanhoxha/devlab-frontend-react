import { Form, Link, useActionData, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';
import '../App.css';

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1 className="text">Log in</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email" className="text">
            Email
          </label>
          <input
            className="input-box"
            id="email"
            type="email"
            name="email"
            required
          />
        </p>
        <p>
          <label htmlFor="image" className="text">
            Password
          </label>
          <input
            className="input-box"
            id="password"
            type="password"
            name="password"
            required
          />
        </p>
        <div className={classes.actions}>
          <button className="button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Saved'}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
