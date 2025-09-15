# Versão 4: Styled Components

Esta é a quarta versão da aplicação, implementada utilizando Styled Components.

## Características

- **Styled Components**: CSS-in-JS com componentes estilizados e tema dinâmico
- **Design System**: Tema centralizado com todas as variáveis de design
- **Responsividade**: Media queries integradas nos componentes
- **Dark Mode**: Toggle entre temas com ThemeProvider
- **Acessibilidade**: Atributos ARIA e foco visível

## Como executar

1. Instale as dependências: `npm install`
2. Execute em modo de desenvolvimento: `npm run dev`
3. Abra no navegador: http://localhost:5173

## Vantagens do Styled Components

- Estilos escopados automaticamente
- Props dinâmicas para variantes
- Tema centralizado e fácil de modificar
- Melhor desempenho com estilos críticos
- Suporte completo a todas as funcionalidades do CSS

## Comparação com as versões anteriores

- **CSS Global**: Estilos sem escopo, potencial para conflitos
- **CSS Modules**: Escopo local mas com sintaxe verbosa
- **Tailwind CSS**: Classes utilitárias, mas HTML poluído
- **Styled Components**: CSS-in-JS com melhor developer experience


### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
