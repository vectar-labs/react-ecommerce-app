import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { getCartItemsWithDetails, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const cartItems = getCartItemsWithDetails();

  return (
    <div className="w-full max-w-7xl mx-auto h-screen py-12">
      <h1 className="text-2xl font-bold">Checkout</h1>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Your Cart Summary</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={item.product.image} alt={item.product.name} className="w-32 h-32 object-cover rounded" />
                    <div>
                      <h3>{item.product.name}</h3>
                      <p>Price: ${item.product.price.toFixed(2)}</p>
                    </div>

                    <div>
                      <button
                        className="bg-teal-500 text-white p-3 rounded-md hover:bg-teal-600 my-3 cursor-pointer"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>

                      <button className="text-black p-3 border border-gray-300 rounded-md hover:bg-gray-100 my-3 cursor-pointer">{item.quantity}</button>

                      <button
                        className="bg-teal-500 text-white p-3 rounded-md hover:bg-teal-600 my-3 cursor-pointer"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                    </div>

                    <div>
                      <button className="bg-red-500 text-white p-3 rounded-md hover:bg-red-600 my-3 cursor-pointer" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-gray-300 my-4">
                    <p className="text-right font-bold">Subtotal: ${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* TOTAL BELOW THE LIST */}
            <div className="border-t border-gray-300 my-4">
              <p className="text-right font-bold">Total: ${getCartTotal().toFixed(2)}</p>
              <button className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 my-3 cursor-pointer" onClick={clearCart}>
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
