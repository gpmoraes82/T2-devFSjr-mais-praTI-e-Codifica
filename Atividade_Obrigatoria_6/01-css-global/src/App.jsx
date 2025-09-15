import { useState, useEffect } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { products as sampleProducts } from '../../data/products';

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    // Simular carregamento de dados
    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts(sampleProducts);
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleAddToCart = (product) => {
        setCartItems(prev => [...prev, product]);
    };

    return (
        <div className="App">
            <Navbar cartItemsCount={cartItems.length} />

            <main className="container">
                <div className="products-grid">
                    {loading ? (
                        // Exibir esqueletos durante o carregamento
                        Array.from({ length: 6 }).map((_, index) => (
                            <ProductCard key={index} loading={true} />
                        ))
                    ) : (
                        // Exibir produtos quando carregados
                        products.map(product => (
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