import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="w-full ">
      <div className="w-full max-w-7xl mx-auto">
        {/* home hero section  */}
        <section>
          <div className="w-full h-[300px] bg-[url('./src/assets/hero_image.jpg')] bg-center bg-no-repeat rounded-lg flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Welcome to Techy Shop</h1>
          </div>
        </section>
        {/* product list section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* ProductCard component will be rendered here */}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
