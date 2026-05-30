import { useParams, Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === parseInt(id));

  const productQuantity = productInCart ? productInCart.quantity : 0;

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (!foundProduct) {
      navigate("/");
    } else {
      setProduct(foundProduct);
    }
  }, [id]);

  return (
    <div className="w-full max-w-4xl mx-auto h-screen  py-16 ">
      <div>
        {product && (
          <>
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-slate-700">{product.name}</h2>
            <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          </>
        )}
        <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 my-3 cursor-pointer" onClick={() => addToCart(product.id)}>
          Add to Cart {productQuantity > 0 ? `(${productQuantity})` : ""}
        </button>
        <Link to="/">
          <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 my-3 cursor-pointer">Back to Products</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
