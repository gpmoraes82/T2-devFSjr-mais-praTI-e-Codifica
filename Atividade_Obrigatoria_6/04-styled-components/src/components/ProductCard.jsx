import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Skeleton from './Skeleton';

const ProductCardContainer = styled.div`
  background-color: ${props => props.theme.bgPrimary};
  border: 1px solid ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  transition: ${props => props.theme.transition};
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.boxShadow.lg};
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: ${props => props.theme.bgSecondary};
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.$loaded ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const ProductImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.bgSecondary};
  color: ${props => props.theme.textSecondary};
`;

const ProductTag = styled.span`
  position: absolute;
  top: ${props => props.theme.spacing.sm};
  left: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  background-color: ${props =>
        props.$type === 'novo' ? props.theme.success : props.theme.danger
    };
`;

const ProductInfo = styled.div`
  padding: ${props => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  flex-grow: 1;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.5rem;
`;

const ProductPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.textPrimary};
`;

const ProductRating = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled.span`
  color: ${props => props.$filled ? props.theme.rating : '#ddd'};
  font-size: 1rem;
`;

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
            <ProductCardContainer aria-hidden="true">
                <ProductImageContainer>
                    <Skeleton width="100%" height="100%" />
                </ProductImageContainer>
                <ProductInfo>
                    <Skeleton width="80%" height="1.25rem" />
                    <Skeleton width="60%" height="1rem" />
                    <Skeleton width="40%" height="1rem" />
                    <Skeleton width="100%" height="2.5rem" borderRadius="0.375rem" />
                </ProductInfo>
            </ProductCardContainer>
        );
    }

    return (
        <ProductCardContainer>
            <ProductImageContainer>
                {!imageLoaded && !imageError && (
                    <Skeleton width="100%" height="100%" />
                )}
                {imageError ? (
                    <ProductImagePlaceholder>
                        <span>Imagem não disponível</span>
                    </ProductImagePlaceholder>
                ) : (
                    <ProductImage
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        $loaded={imageLoaded}
                    />
                )}
                {product.tag && (
                    <ProductTag $type={product.tag.toLowerCase()}>
                        {product.tag}
                    </ProductTag>
                )}
            </ProductImageContainer>
            <ProductInfo>
                <ProductTitle title={product.title}>
                    {product.title}
                </ProductTitle>
                <ProductPrice>
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </ProductPrice>
                <ProductRating>
                    {Array.from({ length: 5 }, (_, i) => (
                        <Star
                            key={i}
                            $filled={i < Math.floor(product.rating)}
                            aria-hidden="true"
                        >
                            ★
                        </Star>
                    ))}
                    <span className="sr-only">Avaliação: {product.rating} de 5 estrelas</span>
                </ProductRating>
                <Button
                    variant="solid"
                    onClick={() => onAddToCart(product)}
                    aria-label={`Adicionar ${product.title} ao carrinho`}
                >
                    Adicionar ao carrinho
                </Button>
            </ProductInfo>
        </ProductCardContainer>
    );
};

export default ProductCard;