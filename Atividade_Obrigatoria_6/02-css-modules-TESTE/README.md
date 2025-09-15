# Versão 02 – CSS Modules

- Cada componente possui seu próprio arquivo `*.module.css`.
- Dark mode persistente via `localStorage`.
- Grid responsivo:  
  - ≤480px → 1 coluna  
  - 481–768px → 2 colunas  
  - 769–1024px → 3 colunas  
  - ≥1025px → 4 colunas
- Skeleton simula atraso sem causar layout shift.
- Botão com variantes: `solid`, `outline`, `ghost`.
- Acessibilidade: foco visível, aria-labels, contraste ≥ 4.5:1.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
