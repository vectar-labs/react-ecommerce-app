import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="w-full py-2.5">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-teal-500">
          Techy Shop
        </Link>
        <div className="flex space-x-4">
          <p>{user ? `Welcome back, ${user.username}!` : ""}</p>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div className="flex space-x-4">
          {user ? (
            <button onClick={logout} className="border border-red-500 text-red-500 px-8 py-2 rounded-sm">
              Logout
            </button>
          ) : (
            <>
              <Link to="/auth" className="border border-teal-500 text-slate-900 px-8 py-2 rounded-sm">
                Login
              </Link>
              <Link to="/auth/signup" className="bg-teal-500 text-white px-8 py-2 rounded-sm">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
