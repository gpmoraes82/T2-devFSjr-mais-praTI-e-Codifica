import { useState } from 'react';
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
            <div className="bg-bg-primary border border-border rounded-lg overflow-hidden transition-all flex flex-col" aria-hidden="true">
                <div className="relative w-full aspect-square overflow-hidden bg-bg-secondary">
                    <Skeleton width="100%" height="100%" />
                </div>
                <div className="p-md flex flex-col gap-sm flex-grow">
                    <Skeleton width="80%" height="1.25rem" />
                    <Skeleton width="60%" height="1rem" />
                    <Skeleton width="40%" height="1rem" />
                    <Skeleton width="100%" height="2.5rem" borderRadius="rounded-md" />
                </div>
            </div>
        );
    }

    return (
        <div className="bg-bg-primary border border-border rounded-lg overflow-hidden transition-all flex flex-col hover:-translate-y-1 hover:shadow-lg">
            <div className="relative w-full aspect-square overflow-hidden bg-bg-secondary">
                {!imageLoaded && !imageError && (
                    <Skeleton width="100%" height="100%" />
                )}
                {imageError ? (
                    <div className="w-full h-full flex items-center justify-center bg-bg-secondary text-text-secondary">
                        <span>Imagem não disponível</span>
                    </div>
                ) : (
                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                )}
                {product.tag && (
                    <span className={`absolute top-sm left-sm px-sm py-xs rounded-sm text-xs font-semibold text-white ${product.tag.toLowerCase() === 'novo' ? 'bg-success' : 'bg-danger'
                        }`}>
                        {product.tag}
                    </span>
                )}
            </div>
            <div className="p-md flex flex-col gap-sm flex-grow">
                <h3 className="text-base font-medium text-text-primary text-ellipsis-2 min-h-[2.5rem]" title={product.title}>
                    {product.title}
                </h3>
                <div className="text-xl font-bold text-text-primary">
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="flex gap-0.5">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span
                            key={i}
                            className={`text-base ${i < Math.floor(product.rating) ? 'text-rating' : 'text-gray-300'}`}
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
                    className="w-full"
                >
                    Adicionar ao carrinho
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;