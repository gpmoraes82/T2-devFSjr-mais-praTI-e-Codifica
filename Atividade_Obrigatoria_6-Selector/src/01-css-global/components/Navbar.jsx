import React from "react";

const Navbar = ({ toggleTheme, theme, cartCount }) => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <button onClick={toggleTheme}>{theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}</button>
      <div className="cart-badge" aria-label={`Itens no carrinho: ${cartCount}`}>🛒 {cartCount}</div>
    </nav>
  );
};

export default Navbar;
