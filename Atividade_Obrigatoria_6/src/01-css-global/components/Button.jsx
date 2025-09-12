import React from "react";

const Button = ({ children, variant = "solid", disabled }) => {
    return (
        <button className={`btn btn-${variant}`} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
