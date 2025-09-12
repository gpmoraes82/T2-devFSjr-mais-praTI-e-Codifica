import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ cartCount = 0 }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggle() {
        setTheme((t) => (t === "light" ? "dark" : "light"));
    }

    return (
        <header className={styles.nav} role="banner">
            <div className={styles.logo} aria-label="Logo">LojaExemplo</div>
            <div className={styles.controls}>
                <button className="btn" onClick={toggle} aria-pressed={theme === "dark"} aria-label="Alternar tema">
                    {theme === "dark" ? "🌙" : "☀️"}
                </button>
                <button className="btn" aria-label="Abrir carrinho">
                    🛒 <span className={styles.badge} aria-hidden="true">{cartCount}</span>
                </button>
            </div>
        </header>
    );
}
