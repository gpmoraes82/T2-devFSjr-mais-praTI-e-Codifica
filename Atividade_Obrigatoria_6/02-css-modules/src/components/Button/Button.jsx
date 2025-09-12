// import React from "react";
import styles from "./Button.module.css";

export default function Button({ variant = "solid", children, disabled, loading, ...props }) {
    const cls = [
        styles.btn,
        variant === "outline" ? styles.btnOutline : variant === "ghost" ? styles.btnGhost : styles.btnSolid
    ].join(" ");

    return (
        <button className={cls} disabled={disabled || loading} aria-busy={loading} {...props}>
            {loading ? "Carregando..." : children}
        </button>
    );
}
