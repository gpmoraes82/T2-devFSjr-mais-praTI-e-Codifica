import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ theme, setTheme }) => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>MyShop</h1>
            <div className={styles.actions}>
                <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className={styles.button}
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
                <span className={styles.cartBadge}>3</span>
            </div>
        </nav>
    );
};

export default Navbar;
