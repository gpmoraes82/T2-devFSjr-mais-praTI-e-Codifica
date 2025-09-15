import React from "react";

export default function Button({ variant = "solid", children, onClick, ariaLabel, disabled, loading, ...rest }) {
  const className = `btn btn--${variant} ${disabled ? "btn--disabled" : ""} ${loading ? "btn--loading" : ""}`;
  return (
    <button
      {...rest}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled || loading}
    >
      {loading ? <span className="btn__spinner" aria-hidden="true"></span> : null}
      <span className="btn__content">{children}</span>
    </button>
  );
}
