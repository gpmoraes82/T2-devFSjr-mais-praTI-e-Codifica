# Versão 2: CSS Modules

Esta é a segunda versão da aplicação, implementada utilizando CSS Modules.

## Características

- **CSS Modules**: Estilos com escopo local para cada componente
- **Design System**: Utilização de variáveis CSS para cores, espaçamentos e outros tokens de design
- **Responsividade**: Layout adaptativo para diferentes tamanhos de tela
- **Dark Mode**: Tema escuro com persistência via localStorage
- **Acessibilidade**: Navegação por teclado, contraste adequado e atributos ARIA

## Como executar

1. Instale as dependências: `npm install`
2. Execute em modo de desenvolvimento: `npm run dev`
3. Abra no navegador: http://localhost:5173

## Vantagens do CSS Modules

- Escopo local automático para estilos
- Sem conflitos de nomes de classes
- Fácil manutenção e refatoração
- Compatível com todas as funcionalidades do CSS

## Próximas versões

As próximas versões implementarão:
3. Tailwind CSS
4. styled-components


### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
