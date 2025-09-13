import { useState, useEffect } from "react";

export default function Navbar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <nav className="flex justify-between items-center px-4 py-3 sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm z-10">
            <h1 className="font-bold text-xl text-blue-600">Loja React</h1>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="px-3 py-1 rounded-lg border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
                <span className="px-3 py-1 rounded-lg bg-blue-600 text-white">🛒 0</span>
            </div>
        </nav>
    );
}
