// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import { products } from '../../data/products';
import styles from './App.module.css';

function App() {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    // Simular carregamento de dados
    useEffect(() => {
        const timer = setTimeout(() => {
            setProductsData(products);
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleAddToCart = (product) => {
        setCartItems(prev => [...prev, product]);
        // Feedback visual para o usuário (opcional)
        console.log(`Produto adicionado: ${product.title}`);
    };

    return (
        <div className={styles.app}>
            <Navbar cartItemsCount={cartItems.length} />

            <main className={styles.container}>
                <div className={styles.productsGrid}>
                    {loading ? (
                        // Exibir esqueletos durante o carregamento
                        Array.from({ length: 6 }).map((_, index) => (
                            <ProductCard key={index} loading={true} />
                        ))
                    ) : (
                        // Exibir produtos quando carregados
                        productsData.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={handleAddToCart}
                            />
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;