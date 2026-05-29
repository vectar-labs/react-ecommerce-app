import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const { signup, error } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signup(data.name, data.email, data.password);
    // clear form after submission
    reset();
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 w-full">
          <h2 className="text-xl text-slate-800 text-center font-medium">Create account</h2>
          <p className="text-sm text-slate-600 text-center">Join our community and enjoy exclusive benefits!</p>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="John Doe"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500 text-sm my-2">Name is required</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="name@flowbite.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-sm my-2">Email is required</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="••••••••"
            {...register("password", { required: "Password is required", minLength: 6, maxLength: 12 })}
          />
          {errors.password && <p className="text-red-500 text-sm my-2">Password is required to be between 6 and 12 characters</p>}
        </div>

        <button
          type="submit"
          className="text-white bg-teal-600 w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
        >
          Signup
        </button>
        {error && <p className="text-red-500 text-sm my-2">{error}</p>}
        <label htmlFor="remember" className="flex items-center my-5">
          <p className="ms-2 text-sm  text-heading text-slate-700">
            Already have an account?{" "}
            <a href="/auth" className="text-fg-brand hover:underline">
              Login
            </a>
          </p>
        </label>
      </form>
    </div>
  );
};

export default Signup;
