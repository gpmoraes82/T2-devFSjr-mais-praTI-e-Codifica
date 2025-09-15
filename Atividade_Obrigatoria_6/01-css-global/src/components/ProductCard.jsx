import { useState } from 'react';
import '../styles/global.css';
import Button from './Button';
import Skeleton from './Skeleton';

const ProductCard = ({ product, loading = false, onAddToCart }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true);
    };

    if (loading) {
        return (
            <div className="product-card" aria-hidden="true">
                <div className="product-image-container">
                    <Skeleton width="100%" height="100%" />
                </div>
                <div className="product-info">
                    <Skeleton width="80%" height="1.25rem" />
                    <Skeleton width="60%" height="1rem" />
                    <Skeleton width="40%" height="1rem" />
                    <Skeleton width="100%" height="2.5rem" borderRadius="var(--border-radius-md)" />
                </div>
            </div>
        );
    }

    return (
        <div className="product-card">
            <div className="product-image-container">
                {!imageLoaded && !imageError && (
                    <Skeleton width="100%" height="100%" />
                )}
                {imageError ? (
                    <div className="product-image-placeholder">
                        <span>Imagem não disponível</span>
                    </div>
                ) : (
                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        className={imageLoaded ? 'product-image loaded' : 'product-image'}
                    />
                )}
                {product.tag && (
                    <span className={`product-tag ${product.tag.toLowerCase()}`}>
                        {product.tag}
                    </span>
                )}
            </div>
            <div className="product-info">
                <h3 className="product-title" title={product.title}>
                    {product.title}
                </h3>
                <div className="product-price">
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="product-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span
                            key={i}
                            className={i < Math.floor(product.rating) ? 'star filled' : 'star'}
                            aria-hidden="true"
                        >
                            ★
                        </span>
                    ))}
                    <span className="sr-only">Avaliação: {product.rating} de 5 estrelas</span>
                </div>
                <Button
                    variant="solid"
                    onClick={() => onAddToCart(product)}
                    aria-label={`Adicionar ${product.title} ao carrinho`}
                >
                    Adicionar ao carrinho
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;