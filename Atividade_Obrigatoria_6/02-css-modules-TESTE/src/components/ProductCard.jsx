import { useState, useEffect } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
    const [loading, setLoading] = useState(true);
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.card}>
            <div className={styles.media}>
                {loading && <Skeleton variant="img" />}
                {!loading && (
                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        onLoad={() => setImgLoaded(true)}
                        className={`${styles.img} ${imgLoaded ? styles.visible : styles.hidden
                            }`}
                    />
                )}
            </div>

            <div className={styles.body}>
                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.price}>${product.price}</p>
                <p className={styles.rating}>{"★".repeat(product.rating)}</p>
                <span className={styles.tag}>{product.tag}</span>
                <Button variant="solid">Adicionar</Button>
            </div>
        </div>
    );
}
