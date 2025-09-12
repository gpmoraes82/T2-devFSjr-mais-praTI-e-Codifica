import { useState } from "react";
import styles from "./ProductCard.module.css";
import Button from "../Button/Button.jsx";
import { Skeleton } from "../Skeleton/Skeleton";

export default function ProductCard({ product }) {
	const [loading, setLoading] = useState(true);
	const [failed, setFailed] = useState(false);

	const handleLoad = () => setLoading(false);
	const handleError = () => {
		setFailed(true);
		setLoading(false);
	};

	const imgSrc = failed ? "https://placehold.co/600x400?text=Carregando%20..." : product.image;

	return (
		<article className={styles.card} tabIndex={0} role="article" aria-labelledby={`title-${product.id}`}>
			<div className={styles.cardMedia}>
				{loading && <Skeleton width="100%" height="100%" borderRadius="8px" />}
				<img
					className={styles.img}
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
				/>
			</div>

			<div className={styles.cardBody}>
				<div className={styles.title} id={`title-${product.id}`}>{product.title}</div>

				<div className={styles.meta}>
					<div aria-label={`Avaliação ${product.rating} de 5`} title={`${product.rating} de 5`}>
						<span style={{ color: "var(--accent)" }}>★</span> <span style={{ marginLeft: 6 }}>{product.rating}</span>
					</div>
					<div className={styles.tag} aria-hidden="true">{product.tag}</div>
				</div>

				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
					<div>
						<div className={styles.price}>R$ {product.price.toFixed(2)}</div>
					</div>

					<div className={styles.actions}>
						<Button aria-label={`Adicionar ${product.title}`} onClick={() => alert(`Adicionado ${product.title}`)}>
							Adicionar
						</Button>
						<Button variant="outline" aria-label={`Mais opções ${product.title}`}>…</Button>
						<Button variant="ghost" aria-label={`Favoritar ${product.title}`}>♡</Button>
					</div>
				</div>
			</div>
		</article>
	);
}
