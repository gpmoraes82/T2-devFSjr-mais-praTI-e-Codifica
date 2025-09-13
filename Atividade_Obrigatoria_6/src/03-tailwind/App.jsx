import { PRODUCTS } from "../data/products";
import ProductCard from "./components/ProductCard";

export default function SelectorApp() {
  return (
    <main className="grid gap-4 p-4 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}