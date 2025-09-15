import { useState, useEffect } from 'react';
import Button from './Button';

const Navbar = ({ cartItemsCount = 0 }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="sticky top-0 bg-bg-primary border-b border-border z-50 py-md transition-all">
            <div className="container mx-auto px-md">
                <div className="flex justify-between items-center">
                    <div className="navbar-logo">
                        <h1 className="text-xl font-bold text-accent">Loja</h1>
                    </div>

                    <div className="flex items-center gap-md">
                        <Button
                            variant="ghost"
                            onClick={toggleTheme}
                            aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </Button>

                        <div className="relative">
                            <Button variant="outline" aria-label={`Carrinho de compras com ${cartItemsCount} itens`}>
                                🛒 Carrinho
                                {cartItemsCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-danger text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                                        {cartItemsCount}
                                    </span>
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