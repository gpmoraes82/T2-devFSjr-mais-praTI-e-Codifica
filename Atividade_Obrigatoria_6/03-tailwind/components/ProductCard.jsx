import { useState } from "react";
import Button from "./Button";

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setFailed(true);
    setLoading(false);
  };

  const imgSrc = failed ? "https://via.placeholder.com/600?text=Sem+imagem" : product.image;

  return (
    <article
      className="bg-white dark:bg-[#071029] rounded-[10px] border border-transparent dark:border-gray-700 shadow-card dark:shadow-cardDark overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-cardHover focus-within:outline-none focus-within:ring-4 focus-within:ring-primary/30"
      tabIndex={0}
      role="article"
      aria-labelledby={`title-${product.id}`}
    >
      <div className="relative w-full aspect-square bg-gray-100 dark:bg-gray-800">
        {/* skeleton while loading */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full animate-pulse">
              <div className="bg-gray-200 dark:bg-gray-700 w-full h-full" />
            </div>
          </div>
        )}

        {/* image always mounted but fades in (prevents onLoad blocking) */}
        <img
          src={imgSrc}
          alt={product.title}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover rounded-none transition-opacity duration-220 ${loading ? "opacity-0" : "opacity-100"}`}
          aria-hidden={loading ? "true" : "false"}
        />

        {/* tag */}
        {product.tag && (
          <span className="absolute top-2 left-2 bg-accent text-black text-xs px-2 py-1 rounded-full">
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-3 flex flex-col gap-2">
        <h3 id={`title-${product.id}`} className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2" title={product.title}>
          {product.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2" aria-label={`Avaliação ${product.rating} de 5`}>
            <span className="text-yellow-400">★</span>
            <span>{product.rating}</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">R$ {product.price.toFixed(2)}</div>
        </div>

        <div className="mt-3 flex gap-2">
          <Button>Adicionar</Button>
          <Button variant="outline">Detalhes</Button>
          <Button variant="ghost" aria-label={`Favoritar ${product.title}`}>♡</Button>
        </div>
      </div>
    </article>
  );
}
