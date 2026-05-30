import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            {/* protected routes */}

            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            {/* public route */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/signup" element={<Signup />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
