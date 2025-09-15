import { useState, useEffect } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";


export default function ProductCard({ product }) {
    const [loading, setLoading] = useState(true);
    const [imgLoaded, setImgLoaded] = useState(false);

    function handleAdd() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert(`${product.title} adicionado ao carrinho`);
        }, 900);
    }

    // simular atraso
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="card">
            <div className="card__media">
                {loading && <div className="skeleton skeleton-img" />}

                {!loading && (
                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className={`card__img ${imgLoaded ? "is-visible" : "is-hidden"}`}
                        onLoad={() => setImgLoaded(true)}
                    />
                )}

                {product.tag && (
                    <span
                        className={`card__tag ${product.tag === "Promo" ? "card__tag--promo" : ""
                            }`}
                    >
                        {product.tag}
                    </span>
                )}
            </div>

            {/* <div className="card__body">
                <h2 className="card__title">{product.title}</h2>
                <p className="card__price">${product.price}</p>
                <p className="card__rating">{"★".repeat(product.rating)}</p>
            </div> */}

            <div className="card__body">
                <h3
                    id={`title-${product.id}`}
                    className="card__title"
                    title={product.title}
                >
                    {product.title}
                </h3>

                <div className="card__meta">
                    <div className="card__price">R$ {product.price.toFixed(2)}</div>
                    <div
                        className="card__rating"
                        aria-label={`Avaliação ${product.rating} de 5`}
                    >
                        ★ {product.rating.toFixed(1)}
                    </div>
                </div>

                <div className="card__actions">
                    <Button variant="outline" ariaLabel={`Ver ${product.title}`}>
                        Ver
                    </Button>
                    <Button
                        variant="solid"
                        onClick={handleAdd}
                        ariaLabel={`Adicionar ${product.title}`}
                        loading={loading}
                    >
                        Adicionar
                    </Button>
                    <Button variant="ghost" ariaLabel={`Mais opções sobre ${product.title}`}>
                        ⋯
                    </Button>
                </div>
            </div>
        </div>
    );
}