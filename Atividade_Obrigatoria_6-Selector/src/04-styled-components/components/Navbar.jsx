import React from "react";
import styled from "styled-components";

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(6px);
`;

const Row = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.base};
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:0.5rem;
`;

const Logo = styled.div`
  display:inline-flex;
  align-items:center;
  gap:0.75rem;
  .mark {
    width:40px; height:40px; border-radius:8px;
    background: ${({ theme }) => theme.colors.primary};
    color:white; display:flex; align-items:center; justify-content:center; font-weight:700;
  }
`;

const Actions = styled.div`
  display:flex; gap:0.5rem; align-items:center;
`;

const IconButton = styled.button`
  display:inline-flex; align-items:center; gap:0.5rem;
  padding:0.4rem 0.75rem; border-radius:${({ theme }) => theme.spacing.radius};
  border: 1px solid transparent; cursor:pointer;
  background: ${({ bg, theme }) => bg ? bg : 'transparent'};
  color: ${({ theme }) => theme.colors.text};
  transition: transform ${({ theme }) => theme.transition} ease, box-shadow ${({ theme }) => theme.transition} ease;
  &:focus { box-shadow: 0 0 0 4px rgba(37,99,235,0.12); outline: none; }
`;

const CartBadge = styled.span`
  display:inline-flex; align-items:center; padding:0.4rem 0.6rem; border-radius:${({ theme }) => theme.spacing.radius};
  background:${({ theme }) => theme.colors.primary}; color:white; font-weight:600;
`;

export default function Navbar({ themeName, setTheme }) {
    return (
        <Bar>
            <Row>
                <Logo>
                    <div className="mark">L</div>
                    <div>
                        <div style={{ fontWeight: 700 }}>MyShop</div>
                        <div style={{ fontSize: 12, color: 'gray' }}>Loja demo</div>
                    </div>
                </Logo>

                <Actions>
                    <IconButton
                        aria-pressed={themeName === "dark"}
                        aria-label="Alternar tema claro escuro"
                        onClick={() => setTheme(themeName === "dark" ? "light" : "dark")}
                        bg={({ theme }) => theme.colors.primary}
                        title="Alternar tema"
                        style={{ color: 'white' }}
                    >
                        {themeName === "dark" ? "☀️ Claro" : "🌙 Escuro"}
                    </IconButton>

                    <IconButton aria-label="Itens no carrinho" title="Itens no carrinho">
                        <span aria-hidden>🛒</span>
                        <span className="sr-only">Itens no carrinho: </span>
                        <CartBadge>2</CartBadge>
                    </IconButton>
                </Actions>
            </Row>
        </Bar>
    );
}
