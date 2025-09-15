import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "../data/products";
import "./main.css";

export default function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="min-h-screen bg-white dark:bg-bgdark text-slate-900 dark:text-textdark transition-colors duration-200 ">
            <Navbar theme={theme} setTheme={setTheme} />
            <main className="max-w-7xl mx-auto p-4">
                <section
                    className="grid gap-4 p-2
            grid-cols-1
            bp1:grid-cols-2
            bp2:grid-cols-3
            bp3:grid-cols-4"
                    aria-live="polite"
                >
                    {PRODUCTS.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </section>
            </main>
        </div>
    );
}
