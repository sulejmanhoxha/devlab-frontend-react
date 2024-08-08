import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),

  username: Joi.string().min(3).max(15).required(),

  password: Joi.string().min(8).required(),
  confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
}).required();

const ProfileUpdateForm = () => {
  const { updateProfileMutation, userQuery, accessToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      email: userQuery.data?.email || "",
      username: userQuery.data?.username || "",
      password: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    const { password, username } = formData;
    const userId = userQuery.data?.user_id; // Ensure user_id is defined
    if (userId) {
      updateProfileMutation.mutate({
        data: { password, username },
        id: userId,
        accessToken: accessToken,
      });
      navigate("/");
    } else {
      console.error("User ID is undefined");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("email")}
          />
          <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
        </div>
      </div>

      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("username")}
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.username?.message}
          </p>
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          New password
        </label>
        <div className="mt-2">
          <input
            type="password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("password")}
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.password?.message}
          </p>
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Confirm Password
        </label>
        <div className="mt-2">
          <input
            type="password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("confirmPassword")}
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.confirmPassword?.message}
          </p>
        </div>
      </div>

      <div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isSubmitting ? "Loading..." : "Update"}
        </button>
      </div>
    </form>
  );
};

export default ProfileUpdateForm;
