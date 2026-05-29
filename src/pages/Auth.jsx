import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const { login, error } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password);
    reset();
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 w-full">
          <h2 className="text-xl text-slate-800 text-center font-medium">Welcome back</h2>
        </div>
        <div className="mb-5 w-full">
          <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading text-slate-600">
            Your email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="name@flowbite.com"
          />
          <p className="text-xs text-red-400 mt-3">{errors.email && "Email is required"}</p>
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading text-slate-600">
            Your password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true, minLength: 6, maxLength: 20 })}
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="••••••••"
          />
          <p className="text-xs text-red-400 mt-3">{errors.password && "Password is required"}</p>
        </div>

        <button
          type="submit"
          className="text-white bg-teal-600 w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
        >
          Login
        </button>
        {error && <p className="text-red-500 text-sm my-2">{error}</p>}
        <label htmlFor="remember" className="flex items-center my-5">
          <p className="ms-2 text-sm text-heading text-slate-600">
            Dont have an account?{" "}
            <a href="/auth/signup" className="text-fg-brand hover:underline">
              Sign up
            </a>
          </p>
        </label>
      </form>
    </div>
  );
};

export default Auth;
