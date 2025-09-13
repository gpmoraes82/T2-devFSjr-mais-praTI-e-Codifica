import React from "react";

export default function Navbar({ theme, setTheme }) {
    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-bgdark/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold select-none">L</div>
                    <h1 className="text-lg font-semibold">MyShop</h1>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        aria-pressed={theme === "dark"}
                        aria-label="Alternar tema claro/escuro"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="inline-flex items-center px-3 py-1.5 rounded-md border border-primary bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition duration-200"
                    >
                        {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
                    </button>

                    <button
                        className="relative inline-flex items-center px-3 py-1.5 rounded-md bg-primary text-white focus:outline-none focus:ring-4 focus:ring-primary/20"
                        aria-label="Itens no carrinho"
                        title="Itens no carrinho"
                    >
                        <span className="mr-2">🛒</span>
                        <span className="sr-only">Itens no carrinho:</span>
                        <span aria-hidden>2</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
