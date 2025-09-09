import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "../../data/products";
import "./index.css";

export default function GlobalCss(){
  return (
    <div>
      <Navbar cartCount={2}/>
      <main className="app-shell container">
        <div className="grid" role="list">
          {PRODUCTS.map(p => (
            <div role="listitem" key={p.id}><ProductCard product={p}/></div>
          ))}
        </div>
      </main>
    </div>
  )
}
