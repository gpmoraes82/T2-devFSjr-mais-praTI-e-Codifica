import { useState, useEffect } from 'react';
import '../styles/global.css';
import Button from './Button';

const Navbar = ({ cartItemsCount = 0 }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <h1>Loja</h1>
                    </div>

                    <div className="navbar-actions">
                        <Button
                            variant="ghost"
                            onClick={toggleTheme}
                            aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </Button>

                        <div className="cart-button">
                            <Button variant="outline" aria-label={`Carrinho de compras com ${cartItemsCount} itens`}>
                                🛒 Carrinho
                                {cartItemsCount > 0 && (
                                    <span className="cart-badge">{cartItemsCount}</span>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;