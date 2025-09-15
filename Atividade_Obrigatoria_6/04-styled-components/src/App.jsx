import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { products } from '../../data/products';
import { lightTheme, darkTheme } from './styles/theme';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgPrimary};
  color: ${props => props.theme.textPrimary};
  transition: ${props => props.theme.transition};
`;

const MainContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const ProductsGrid = styled.div`
  display: grid;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.xl} 0;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function App() {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
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

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    const currentTheme = theme === 'light' ? { ...lightTheme, name: 'light' } : { ...darkTheme, name: 'dark' };

    return (
        <ThemeProvider theme={currentTheme}>
            <AppContainer>
                <Navbar
                    cartItemsCount={cartItems.length}
                    onThemeChange={handleThemeChange}
                    currentTheme={theme}
                />

                <MainContainer>
                    <ProductsGrid>
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
                    </ProductsGrid>
                </MainContainer>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;