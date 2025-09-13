import React, { useState } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 200); // simula atraso
    };

    return (
        <div className={styles.card}>
            {loading && <Skeleton />}
            <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                onLoad={handleImageLoad}
                className={`${styles.img} ${loading ? styles.hiddenImg : styles.visibleImg}`}
            />
            <h3 title={product.title} className={styles.title}>
                {product.title}
            </h3>
            <p>${product.price.toFixed(2)}</p>
            <p>{"★".repeat(Math.round(product.rating))}</p>
            <span className={`${styles.tag} ${styles[product.tag.toLowerCase()]}`}>
                {product.tag}
            </span>
            <Button variant="solid">Adicionar</Button>
        </div>
    );
};

export default ProductCard;
