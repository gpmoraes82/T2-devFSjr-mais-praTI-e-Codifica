import { useState } from "react";
import Button from "./Button";
import { Skeleton } from "./Skeleton";

export default function ProductCard({ product }) {
    // const [loading, setLoading] = useState(true);

    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);

    const handleLoad = () => setLoading(false);
    const handleError = () => {
        setFailed(true);
        setLoading(false);
    };

    const imgSrc = failed ? "https://placehold.co/600x400?text=Carregando%20" : product.image;

    return (
        <article
            className="card"
            tabIndex={0}
            role="article"
            aria-labelledby={`title-${product.id}`}
        >
            <div className="card-media">
                {loading && <Skeleton width="100%" height="100%" borderRadius="8px" />}
                <img
                    // src={product.image}
                    src={imgSrc}
                    alt={product.title}
                    loading="lazy"
                    onLoad={handleLoad}
					onError={handleError}
					style={{
						opacity: loading ? 0 : 1,
						transition: "opacity 3s ease",
						// position: "absolute",
						// inset: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
                        borderRadius: "8px"
					}}
                    // onLoad={() => setLoading(false)}
                    // style={{
                    //     opacity: loading ? 0 : 1,
                    //     transition: "opacity 3s ease",
                    //     width: "100%",
                    //     height: "100%",
                    //     objectFit: "cover",
                    //     borderRadius: "8px"
                    // }}
                />
            </div>

            <div className="card-body">
                <div className="title" id={`title-${product.id}`}>
                    {product.title}
                </div>
                <div className="meta">
                    <div
                        className="rating"
                        aria-label={`Avaliação ${product.rating} de 5`}
                        title={`${product.rating} de 5`}
                    >
                        <span>★</span>
                        <span>{product.rating}</span>
                    </div>
                    <div className="tag" aria-hidden="true">
                        {product.tag}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 8,
                    }}
                >
                    <div>
                        <div className="price">R$ {product.price.toFixed(2)}</div>
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                        <Button
                            aria-label={`Adicionar ${product.title}`}
                            onClick={() => alert(`Adicionado ${product.title}`)}
                        >
                            Adicionar
                        </Button>
                        <Button variant="outline" aria-label={`Mais opções ${product.title}`}>
                            …
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}

