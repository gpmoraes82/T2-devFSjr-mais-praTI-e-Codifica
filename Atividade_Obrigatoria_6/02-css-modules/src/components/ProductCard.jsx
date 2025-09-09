import styles from "./ProductCard.module.css";
import Button from "./Button";
import { useState } from "react";

export default function ProductCard({product}){
  const [loading,setLoading] = useState(true);
  return (
    <article className={styles.card} tabIndex={0} aria-labelledby={`t-${product.id}`}>
      <div className={styles.cardMedia}>
        {loading && <div className="skeleton" style={{width:"100%",height:"100%"}}/>}
        <img className={styles.img} src={product.image} loading="lazy" alt={product.title}
             onLoad={()=>setLoading(false)} style={{display: loading ? "none" : "block"}} />
      </div>
      <div className={styles.body}>
        <div className={styles.title} id={`t-${product.id}`}>{product.title}</div>
        <div className={styles.meta}>
          <div aria-label={`Avaliação ${product.rating}`}>★ {product.rating}</div>
          <div className={styles.tag}>{product.tag}</div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div className="price">R$ {product.price.toFixed(2)}</div>
          <div style={{display:"flex",gap:8}}>
            <Button>Adicionar</Button>
            <Button variant="outline">…</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
