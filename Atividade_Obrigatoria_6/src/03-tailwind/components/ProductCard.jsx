import React, { useState } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

/**
 * ProductCard behavior:
 * - shows Skeleton (aspect preserved) while loading true
 * - image always requested by browser (no display:none), but hidden via opacity + absolute to guarantee onLoad fires
 * - onLoad -> waits 200ms -> setLoading(false)
 */
export default function ProductCard({ product }) {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setTimeout(() => setLoading(false), 200); // 200ms simulated delay
    };

    const ratingInt = Math.round(product.rating);
    const isNew = product.tag.toLowerCase() === "novo";

    return (
        <article className="relative group bg-white dark:bg-bgdark border border-slate-200 dark:border-slate-700 rounded-md p-4 transition transform duration-200 hover:-translate-y-1 hover:shadow-card-hover focus-within:ring-4 focus-within:ring-primary/10" tabIndex="0" aria-labelledby={`title-${product.id}`}>
            {/* image container keeps aspect */}
            <div className="card-img-wrapper mb-3 relative">
                {loading && <Skeleton />}
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    onLoad={handleImageLoad}
                    className={`rounded-md w-full aspect-square object-cover transition-opacity duration-200 ${loading ? 'opacity-0 absolute inset-0' : 'opacity-100 relative'}`}
                />
                {/* Tag */}
                <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-md ${isNew ? 'bg-tagnew text-white' : 'bg-tagpromo text-white'}`}>
                    {product.tag}
                </span>
            </div>

            <h3 id={`title-${product.id}`} className="text-sm font-medium leading-tight mb-1 h-[2.4em] overflow-hidden" title={product.title}>
                {product.title}
            </h3>

            <div className="flex items-center justify-between gap-2 mb-3">
                <div className="text-sm font-semibold">${product.price.toFixed(2)}</div>
                <div aria-label={`Avaliação: ${product.rating} de 5`} title={`${product.rating} de 5`} className="text-yellow-500" >
                    {'★'.repeat(ratingInt)}
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="solid" aria-label={`Adicionar ${product.title} ao carrinho`}>Adicionar</Button>
                <Button variant="outline" aria-label={`Mais opções para ${product.title}`}>Opções</Button>
                <Button variant="ghost" aria-label={`Favoritar ${product.title}`}>☆</Button>
            </div>
        </article>
    );
}
