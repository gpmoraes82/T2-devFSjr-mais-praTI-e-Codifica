import { PRODUCTS } from "../../data/products";
import ProductCard from "./ProductCard";

export default function SelectorApp() {
    return (
        <div
            className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

//
//
//          FALTA O SKELETON LOADING e ZAZ
//
//