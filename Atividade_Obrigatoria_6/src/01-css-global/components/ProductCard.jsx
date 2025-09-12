import React, { useState } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

const ProductCard = ({ product }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="product-card">
            {loading && <Skeleton />}
            <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                onLoad={() => setLoading(false)}
            />
            <h3 title={product.title}>{product.title}</h3>
            <p>${product.price}</p>
            <p>{'★'.repeat(Math.round(product.rating))}</p>
            <span className={`tag ${product.tag.toLowerCase()}`}>{product.tag}</span>
            <Button>Add</Button>
        </div>
    );
};

export default ProductCard;
