import React from "react";
import ReactDOM from "react-dom/client";
import SelectorApp from "./SelectorApp";
import "./01-css-global/styles.css"; // estilo inicial global

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <SelectorApp />
    </React.StrictMode>
);
