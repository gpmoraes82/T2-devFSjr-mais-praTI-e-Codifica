import React, { useEffect, useState } from "react";

export default function Navbar({ cartCount = 0 }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    useEffect(() => { document.documentElement.setAttribute("data-theme", theme); localStorage.setItem("theme", theme); }, [theme]);

    function toggle() { setTheme(prev => prev === "light" ? "dark" : "light"); }

    return (
        <header className="nav" role="banner">
            <div className="logo" aria-label="Logo">LojaExemplo</div>
            <div className="controls">
                <button aria-pressed={theme === "dark"} onClick={toggle} className="btn btn--ghost" title="Toggle tema" aria-label="Alternar tema">
                    {theme === "dark" ? "🌙" : "☀️"}
                </button>
                <button className="btn btn--outline" aria-label="Carrinho">
                    🛒 <span aria-hidden="true" style={{ marginLeft: 6 }}>{cartCount}</span>
                </button>
            </div>
        </header>
    );
}
