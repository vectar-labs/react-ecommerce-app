import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("currentUser") ? { username: JSON.parse(localStorage.getItem("currentUser")) } : null);
  const [error, setError] = useState(null);
  const navigation = useNavigate();

  // signup function to add user to localStorage and set currentUser
  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setError("Email already exists");
      return { success: false, message: "Email already exists" };
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser.name));
    setUser({ username: newUser.name });
    setError(null);
    console.log("User signed up successfully");
    console.log(users);
    return { success: true };
  };

  // login function to set currentUser in localStorage and set user state
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email && user.password === password);
    if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser.name));
      setUser({ username: existingUser.name });
      navigation("/");
      return console.log("User logged in successfully");
    } else {
      setError("Invalid email or password");
      return console.log("Invalid email or password");
    }
  };

  // logout function to remove currentUser from localStorage and set user to null
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setError(null);
  };

  return <AuthContext.Provider value={{ user, setUser, login, signup, logout, error, setError }}>{children}</AuthContext.Provider>;
};
