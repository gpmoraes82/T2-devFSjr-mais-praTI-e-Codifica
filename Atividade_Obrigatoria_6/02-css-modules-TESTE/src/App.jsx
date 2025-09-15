import { useState, useEffect } from "react";
import { products } from "../../data/products.js";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import styles from "./App.module.css";

export default function App() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <div className={styles.app}>
            <Navbar dark={dark} toggleDark={() => setDark(!dark)} cartCount={2} />

            <main className={styles.grid}>
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </main>
        </div>
    );
}
