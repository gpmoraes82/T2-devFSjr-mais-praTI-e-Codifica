import React from "react";

/**
 * variantes: 'solid' | 'outline' | 'ghost'
 */
export default function Button({ children, variant = "solid", disabled = false, ...rest }) {
    const base = "inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20";

    const classes = {
        solid: `${base} bg-primary text-white border border-transparent hover:bg-primary-dark`,
        outline: `${base} bg-transparent text-primary border border-primary hover:bg-primary hover:text-white`,
        ghost: `${base} bg-transparent text-primary border border-transparent hover:bg-primary/10`
    };

    return (
        <button
            {...rest}
            disabled={disabled}
            className={`${classes[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:translate-y-[-2px]'} `}
            aria-disabled={disabled}
        >
            {children}
        </button>
    );
}
