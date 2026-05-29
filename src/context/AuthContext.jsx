import { createContext, useState } from "react";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null);

  // signup function to add user to localStorage and set currentUser
  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // check if user already exists
    if (users.find((user) => user.email === email)) {
      return { success: false, message: "User already exists" };
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(name));
    setUser(newUser);

    return { success: true };
  };

  // login function to set currentUser in localStorage and set user state
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email && user.password === password);
    if (existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser.name));
      setUser(existingUser);
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  // logout function to remove currentUser from localStorage and set user to null
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, setUser, login, signup, logout }}>{children}</AuthContext.Provider>;
};
