# 01-css-global

Versão 01 — implementação usando **CSS Global**.

### Rodando
npm install
npm run dev

markdown
Copy code

### O que inclui
- Navbar fixa com toggle de tema (persistente via `localStorage`).
- Grid responsivo com breakpoints exatos: ≤480 (1), 481–768 (2), 769–1024 (3), ≥1025 (4).
- ProductCard com imagem 1:1, título com 2 linhas + ellipsis, preço, rating, tag, 3 variantes de botão (solid/outline/ghost).
- Estados: hover, focus-visible, disabled, loading (skeleton). Skeleton sem layout shift.
- Dark mode via `data-theme` em `<html>`, persistente.
- Acessibilidade: `aria-*`, navegação por teclado e focus ring.
- Animações usando `transform` e `opacity` com ~200ms.

### Observações
- Tokenização feita via CSS variables no `:root`.
- Em próximas versões (CSS Modules, Tailwind, styled-components) manteremos a mesma API de componentes e estrutura.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
