import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { products } from '../../data/products';

function App() {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [theme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

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
        console.log(`Produto adicionado: ${product.title}`);
    };

    return (
        <div className="min-h-screen bg-bg-primary text-text-primary transition-all">
            <Navbar cartItemsCount={cartItems.length} />

            <main className="container mx-auto px-md">
                <div className="grid gap-lg py-xl 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <ProductCard key={index} loading={true} />
                        ))
                    ) : (
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