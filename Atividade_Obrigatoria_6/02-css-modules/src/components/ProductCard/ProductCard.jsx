// src/components/ProductCard/ProductCard.jsx
import { useState } from 'react';
import Button from '../Button/Button';
import Skeleton from '../Skeleton/Skeleton';
import styles from './ProductCard.module.css';

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
      <div className={styles.productCard} aria-hidden="true">
        <div className={styles.productImageContainer}>
          <Skeleton width="100%" height="100%" />
        </div>
        <div className={styles.productInfo}>
          <Skeleton width="80%" height="1.25rem" />
          <Skeleton width="60%" height="1rem" />
          <Skeleton width="40%" height="1rem" />
          <Skeleton width="100%" height="2.5rem" borderRadius="var(--border-radius-md)" />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        {!imageLoaded && !imageError && (
          <Skeleton width="100%" height="100%" />
        )}
        {imageError ? (
          <div className={styles.productImagePlaceholder}>
            <span>Imagem não disponível</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={imageLoaded ? `${styles.productImage} ${styles.loaded}` : styles.productImage}
          />
        )}
        {product.tag && (
          <span className={`${styles.productTag} ${styles[product.tag.toLowerCase()]}`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle} title={product.title}>
          {product.title}
        </h3>
        <div className={styles.productPrice}>
          R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className={styles.productRating}>
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={i < Math.floor(product.rating) ? `${styles.star} ${styles.filled}` : styles.star}
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