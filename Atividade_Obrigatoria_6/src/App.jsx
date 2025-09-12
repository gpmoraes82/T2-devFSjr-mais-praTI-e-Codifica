import { useState } from "react";

// Importa todas as 4 versões
import GlobalCss from "../01-css-global/src/App";
import CssModules from "../02-css-modules/src/App";
import TailwindApp from "../03-tailwind/src/App";
// import StyledApp from "./04-styled-components/App";

export default function App() {
    const [style, setStyle] = useState("tailwind");

    return (
        <div>
            {/* Menu fixo para trocar estilo */}
            <div style={{
                position: "fixed",
                top: 10,
                left: 10,
                zIndex: 100,
                background: "#fff",
                padding: "10px 16px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
            }}>
                <label htmlFor="style">SELECIONE O ESTILO DE CSS:</label>
                <select
                    id="style"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    style={{ marginLeft: "8px" }}
                >
                    <option value="global">CSS Global</option>
                    <option value="modules">CSS Modules</option>
                    <option value="tailwind">Tailwind CSS</option>
                    <option value="styled">styled-components</option>
                </select>
            </div>

            {/* Renderiza a versão escolhida */}
            <div>
                {style === "global" && <GlobalCss />}
                {style === "modules" && <CssModules />}
                {style === "tailwind" && <TailwindApp />}
                {/*{style === "styled" && <StyledApp />} */}
            </div>
        </div>
    );
}

