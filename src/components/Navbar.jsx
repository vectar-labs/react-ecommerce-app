import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full py-2.5">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-teal-500">Techy Shop</h1>
        <div className="flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/auth" className="border border-teal-500 text-slate-900 px-8 py-2 rounded-sm">
            Login
          </Link>
          <Link to="/auth/signup" className="bg-teal-500 text-white px-8 py-2 rounded-sm">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
