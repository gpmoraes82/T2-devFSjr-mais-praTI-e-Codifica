import React from "react";

const Button = ({ children, variant = "solid", disabled }) => (
  <button className={`btn btn-${variant}`} disabled={disabled}>{children}</button>
);

export default Button;
