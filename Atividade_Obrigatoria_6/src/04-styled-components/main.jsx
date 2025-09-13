import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import useDarkMode from "./useDarkMode";

function Root() {
    const [theme] = useDarkMode(); // hook que salva tema no localStorage

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <App />
        </ThemeProvider>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);
