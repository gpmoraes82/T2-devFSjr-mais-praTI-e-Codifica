import { useEffect, useState } from "react";

export default function Navbar({ cartCount = 3 }) {
    const [dark, setDark] = useState(() => {
        const stored = localStorage.getItem("theme");
        if (stored) return stored === "dark";
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-[#071029] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="text-lg font-bold text-primary dark:text-primary-500">MyShop</div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setDark(!dark)}
                            aria-pressed={dark}
                            aria-label="Alternar tema"
                            className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            {dark ? "🌙" : "☀️"}
                        </button>

                        <div className="relative" aria-label={`Carrinho com ${cartCount} itens`} role="status">
                            <button className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30" aria-label="Abrir carrinho">
                                🛒
                            </button>
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1 py-[1px]">
                                {cartCount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
