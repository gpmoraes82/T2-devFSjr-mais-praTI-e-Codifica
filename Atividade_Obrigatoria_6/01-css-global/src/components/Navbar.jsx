import React, { useEffect, useState } from "react";

export default function Navbar({ cartCount = 0 }) {
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme") || "light");

  useEffect(() => {
    const stored = localStorage.getItem("ao6_theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("ao6_theme", next);
  };

  return (
    <header className="navbar" role="banner">
      <div className="navbar__inner">
        <div className="logo" aria-hidden="false">
          {/* <img src="https://via.placeholder.com/40?text=G" alt="Logo da loja" /> */}
          <span className="logo__text">LojaEx</span>
        </div>

        <nav className="navbar__actions" aria-label="Ações">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={`Tema ${theme === "dark" ? "escuro" : "claro"}, pressionar para alternar`}
            title="Alternar tema"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <button className="icon-btn" aria-label={`Carrinho com ${cartCount} itens`} title="Carrinho">
            <span aria-hidden="true">🛒</span>
            <span className="badge" aria-hidden="false" aria-label={`${cartCount} itens no carrinho`}>{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
