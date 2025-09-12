import React, { useState } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

const ProductCard = ({ product }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        // simula atraso de 200ms
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="product-card">
            {loading && <Skeleton />}

            <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                onLoad={() => setTimeout(() => setLoading(false), 200)}
                className={`product-img ${loading ? "hidden-img" : "visible-img"}`}
            />

            <h3 title={product.title}>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p>{'★'.repeat(Math.round(product.rating))}</p>
            <span className={`tag ${product.tag.toLowerCase()}`}>{product.tag}</span>
            <Button variant="solid">Adicionar</Button>
        </div>
    );
};

export default ProductCard;
