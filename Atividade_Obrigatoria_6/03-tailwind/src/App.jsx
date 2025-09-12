import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton";
import { PRODUCTS } from "../../data/products.js";
import { useEffect, useState } from "react";

export default function TailwindApp() {
    const [loading, setLoading] = useState(true);

    // simulate loading to show skeletons
    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1400);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg)] dark:bg-[#071029]">
            <Navbar cartCount={3} />
            <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
                <section
                    className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    aria-live="polite"
                    aria-busy={loading}
                >
                    {loading
                        ? Array.from({ length: 6 }).map((_, i) => (
                            <div key={i}><Skeleton /></div>
                        ))
                        : PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
                </section>
            </main>
        </div>
    );
}
