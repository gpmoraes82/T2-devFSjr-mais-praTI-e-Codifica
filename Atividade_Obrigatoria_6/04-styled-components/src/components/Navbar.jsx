import { useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.bgPrimary};
  border-bottom: 1px solid ${props => props.theme.border};
  z-index: 100;
  padding: ${props => props.theme.spacing.md} 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLogo = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.accent};
  }
`;

const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

const CartButtonContainer = styled.div`
  position: relative;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${props => props.theme.danger};
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Navbar = ({ cartItemsCount = 0, onThemeChange, currentTheme }) => {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        onThemeChange(newTheme);
    };

    return (
        <NavbarContainer>
            <Container>
                <NavbarContent>
                    <NavbarLogo>
                        <h1>Loja</h1>
                    </NavbarLogo>

                    <NavbarActions>
                        <Button
                            variant="ghost"
                            onClick={toggleTheme}
                            aria-label={`Mudar para modo ${currentTheme === 'light' ? 'escuro' : 'claro'}`}
                        >
                            {currentTheme === 'light' ? '🌙' : '☀️'}
                        </Button>

                        <CartButtonContainer>
                            <Button variant="outline" aria-label={`Carrinho de compras com ${cartItemsCount} itens`}>
                                🛒 Carrinho
                                {cartItemsCount > 0 && (
                                    <CartBadge>{cartItemsCount}</CartBadge>
                                )}
                            </Button>
                        </CartButtonContainer>
                    </NavbarActions>
                </NavbarContent>
            </Container>
        </NavbarContainer>
    );
};

export default Navbar;