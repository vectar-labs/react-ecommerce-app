import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* protected routes */}

          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* public route */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
