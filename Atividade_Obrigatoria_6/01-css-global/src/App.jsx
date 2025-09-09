import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "../../data/products";
import "./index.css";
import { Skeleton } from "./components/Skeleton";

/*
 App: simula atraso (loading) e exibe 6 produtos.
 Skeletons usados sem layout shift.
*/
export default function GlobalCss() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000); // atraso simulado
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <Navbar cartCount={2} />
      <main className="app-shell container">
        <div className="grid" role="list">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} width="100%" height="100%" />
            ))
            : PRODUCTS.map((p) => (
              <div role="listitem" key={p.id}><ProductCard product={p} /></div>
            ))}
        </div>
      </main>
    </div>
  )
}
