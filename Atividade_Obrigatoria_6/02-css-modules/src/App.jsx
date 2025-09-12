import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import { PRODUCTS } from "../../data/products.js";
import styles from "./App.module.css";
import "./index.css"; // tokens + reset
import { Skeleton } from "./components/Skeleton/Skeleton.jsx";

/*
 App: simula atraso (loading) e exibe 6 produtos.
 Skeletons usados sem layout shift.
*/
export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const t = setTimeout(() => setLoading(false), 1000); // atraso simulado
		return () => clearTimeout(t);
	}, []);

	return (
		<>
			<Navbar cartCount={3} />
			<main className={styles.container} role="main">
				<section className={styles.grid} aria-live="polite" aria-busy={loading}>
					{loading
						? Array.from({ length: 6 }).map((_, i) => (
							<Skeleton key={i} width="100%" height="100%" />
						))
						: PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
				</section>
			</main>
		</>
	);
}
