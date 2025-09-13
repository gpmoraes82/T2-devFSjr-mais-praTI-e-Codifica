import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "../data/products";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  html,body,#root { height:100%; }
  body {
    margin:0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition: background ${({ theme }) => theme.transition} ease, color ${({ theme }) => theme.transition} ease;
  }
  * { box-sizing: border-box; }
  :focus { outline: none; }
`;

const Container = styled.div`
  min-height: 100vh;
`;

const Grid = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.base};
  padding: ${({ theme }) => theme.spacing.base};

  /* Breakpoints exactly as required */
  grid-template-columns: 1fr;

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const currentTheme = theme === "dark" ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <Global />
            <Container>
                <Navbar themeName={theme} setTheme={setTheme} />
                <main>
                    <Grid aria-live="polite">
                        {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
                    </Grid>
                </main>
            </Container>
        </ThemeProvider>
    );
}
