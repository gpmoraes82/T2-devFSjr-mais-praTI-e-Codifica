import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import styles from './Navbar.module.css';

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
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.navbarContent}>
                    <div className={styles.navbarLogo}>
                        <h1>Loja</h1>
                    </div>

                    <div className={styles.navbarActions}>
                        <Button
                            variant="ghost"
                            onClick={toggleTheme}
                            aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </Button>

                        <div className={styles.cartButton}>
                            <Button variant="outline" aria-label={`Carrinho de compras com ${cartItemsCount} itens`}>
                                🛒 Carrinho
                                {cartItemsCount > 0 && (
                                    <span className={styles.cartBadge}>{cartItemsCount}</span>
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