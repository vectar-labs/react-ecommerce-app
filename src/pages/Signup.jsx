import React from "react";

const Signup = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <form className="w-full max-w-xs mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="John Doe"
            required
          />
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
            required
          />
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
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-teal-600 w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
        >
          Signup
        </button>
        <label htmlFor="remember" className="flex items-center my-5">
          <p className="ms-2 text-sm font-medium text-heading select-none">
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
