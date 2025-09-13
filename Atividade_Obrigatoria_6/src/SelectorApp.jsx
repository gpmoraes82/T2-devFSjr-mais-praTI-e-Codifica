import React, { useState } from "react";

// Import das versões
import CSSGlobalApp from "./01-css-global/App";
import CSSModulesApp from "./02-css-modules/App";
// import TailwindApp from "./03-tailwind/App";
// import StyledComponentsApp from "./04-styled-components/App";

const SelectorApp = () => {
    const [version, setVersion] = useState("css-global");

    const renderApp = () => {
        switch (version) {
            case "css-global":
                return <CSSGlobalApp />;
            case "css-modules":
                return <CSSModulesApp />;
            case "tailwind":
                return <TailwindApp />;
            case "styled-components":
                return <StyledComponentsApp />;
            default:
                return <CSSGlobalApp />;
        }
    };

    return (
        <div>
            <header className="selector">
                <label>
                    Selecione versão:{" "}
                    <select value={version} onChange={(e) => setVersion(e.target.value)}>
                        <option value="css-global">CSS Global</option>
                        <option value="css-modules">CSS Modules</option>
                        <option value="tailwind">Tailwind CSS</option>
                        <option value="styled-components">styled-components</option>
                    </select>
                </label>
            </header>
            <main>{renderApp()}</main>
        </div>
    );
};

export default SelectorApp;