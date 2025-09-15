import styles from "./Navbar.module.css";

export default function Navbar({ dark, toggleDark, cartCount }) {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>MyShop</div>

            <div className={styles.actions}>
                <button
                    onClick={toggleDark}
                    className={styles.themeToggle}
                    aria-label="Alternar tema"
                >
                    {dark ? "🌙" : "☀️"}
                </button>

                <div className={styles.cart} aria-label="Carrinho">
                    🛒
                    {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                </div>
            </div>
        </nav>
    );
}
