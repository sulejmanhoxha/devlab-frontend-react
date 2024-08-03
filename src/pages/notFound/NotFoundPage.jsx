import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center">
          <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
            Thats a 404
          </p>
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            Page not found
          </h1>
          <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">
            The page youre looking for doesnt exist.
          </p>

          <Link
            className="block py-1.5 text-center text-sm font-semibold leading-6 text-indigo-600"
            to={"/"}
          >
            <span aria-hidden="true">&larr;</span> Go to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
