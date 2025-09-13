import { useState, useEffect } from "react";

export default function ProductCard({ product }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 150 + Math.random() * 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col gap-2 hover:shadow-lg transition-transform hover:-translate-y-1">
            {loaded ? (
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-square object-cover rounded-md"
                />
            ) : (
                <div className="w-full aspect-square bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
            )}

            <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
                R$ {product.price.toFixed(2)}
            </p>
            <p className="text-yellow-500">⭐ {product.rating}</p>

            <span
                className={`inline-block px-2 py-1 rounded text-xs font-bold text-white ${product.tag === "Novo" ? "bg-green-500" : "bg-yellow-500"
                    }`}
            >
                {product.tag}
            </span>

            <button className="mt-2 px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                Comprar
            </button>
        </div>
    );
}
