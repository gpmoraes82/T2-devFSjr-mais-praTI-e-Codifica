import React from "react";

export default function Button({ children, variant = "solid", loading, disabled, ...props }) {
    const base =
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-[transform,opacity] duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        solid:
            "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50",
        outline:
            "bg-transparent border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-primary/50",
        ghost:
            "bg-transparent text-primary hover:bg-primary/10 dark:hover:bg-primary/12 focus:ring-primary/50"
    };

    const cls = `${base} ${variants[variant] || variants.solid} ${disabled || loading ? "opacity-50 cursor-not-allowed" : "shadow-sm"}`;

    return (
        <button
            className={cls}
            disabled={disabled || loading}
            aria-busy={loading ? "true" : "false"}
            {...props}
        >
            {loading ? "Carregando..." : children}
        </button>
    );
}
