import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products as sampleProducts } from "../../data/products.js";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simula fetching remoto com atraso -> mostra skeleton global por 1000ms
    const t = setTimeout(() => {
      setProducts(sampleProducts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar cartCount={2} />
      <main className="container" id="main" tabIndex="-1">
        <section aria-label="Produtos" className="product-grid" >
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div className="card" key={i} aria-hidden="true">
                  <div className="card__media"><div className="skeleton skeleton--ratio"/></div>
                  <div className="card__body">
                    <div className="skeleton skeleton--text short" />
                    <div style={{height:8}}/>
                    <div className="skeleton skeleton--text" />
                    <div style={{height:12}}/>
                    <div className="skeleton skeleton--button" />
                  </div>
                </div>
              ))
            : products.map(p => <ProductCard key={p.id} product={p} />)}
        </section>
      </main>
    </>
  );
}
