import { createContext, useState, useContext } from "react";
import { getProductById } from "../data/products";
import { useNavigate } from "react-router";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // add to cart
  function addToCart(productId) {
    const existing = cartItems.find((item) => item.id === productId);

    if (existing) {
      setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }

  // total items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // get cart items with full product info
  const getCartItemsWithDetails = () => {
    return cartItems
      .map((cartItem) => ({
        ...cartItem,
        product: getProductById(cartItem.id),
      }))
      .filter((item) => item.product);
  };

  // remove item
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity } : item)));
  };

  // get cart total price
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  // clear cart
  const clearCart = () => {
    alert("Order placed successfully!");
    setCartItems([]);
    navigate("/");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalItems,
        getCartItemsWithDetails,
        updateQuantity,
        removeFromCart,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
