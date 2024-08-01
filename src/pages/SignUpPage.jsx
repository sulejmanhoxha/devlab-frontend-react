import { Link } from "react-router-dom";

import SignUpForm from "../components/forms/SignUpForm";

function LoginPage() {
  return (
    <div className="container mx-auto">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Link
          className="py-1.5 text-center text-sm font-semibold leading-6 text-indigo-600 underline"
          to={"/"}
        >
          <span aria-hidden="true">&larr;</span> Go to homepage
        </Link>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignUpForm />

          <p className="py-3 text-center text-sm font-medium leading-6">
            Don't have an account?{" "}
            <Link className="text-indigo-600 underline" to={"/signup"}>
              Sign up.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
