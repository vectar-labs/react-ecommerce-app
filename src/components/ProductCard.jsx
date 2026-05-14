import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <h2 className="text-lg font-bold mb-2 text-slate-700">{product.name}</h2>
      <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
      <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
      <div className="flex space-x-2.5 items-center">
        <Link to={`/products/${product.id}`} className="text-sm text-teal-500 hover:underline">
          View Details
        </Link>
        <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 my-3 cursor-pointer">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
