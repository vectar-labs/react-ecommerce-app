import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantity = productInCart ? productInCart.quantity : 0;
  return (
    <div className="">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <h2 className="text-lg font-bold mb-2 text-slate-700">{product.name}</h2>
      <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
      <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
      <div className="flex space-x-2.5 items-center">
        <Link to={`/product/${product.id}`} className="text-sm text-teal-500 hover:underline">
          View Details
        </Link>
        <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 my-3 cursor-pointer" onClick={() => addToCart(product.id)}>
          Add to Cart {productQuantity}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
