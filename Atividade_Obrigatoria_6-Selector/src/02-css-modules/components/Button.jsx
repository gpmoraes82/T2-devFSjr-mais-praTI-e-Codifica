import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, variant = "solid", ...props }) => {
    return (
        <button
            {...props}
            className={`${styles.btn} ${styles[`btn${variant[0].toUpperCase() + variant.slice(1)}`]}`}
        >
            {children}
        </button>
    );
};

export default Button;
