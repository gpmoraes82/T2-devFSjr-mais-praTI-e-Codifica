import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid transparent;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  min-width: 80px;
  
  &:focus-visible {
    outline: 2px solid ${props => props.theme.accent};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${props => {
        switch (props.variant) {
            case 'solid':
                return `
          background-color: ${props.theme.accent};
          color: white;
          &:hover:not(:disabled) {
            background-color: ${props.theme.accentHover};
          }
        `;
            case 'outline':
                return `
          background-color: transparent;
          border-color: ${props.theme.accent};
          color: ${props.theme.accent};
          &:hover:not(:disabled) {
            background-color: ${props.theme.accent};
            color: white;
          }
        `;
            case 'ghost':
                return `
          background-color: transparent;
          color: ${props.theme.accent};
          &:hover:not(:disabled) {
            background-color: rgba(13, 110, 253, 0.1);
          }
        `;
            default:
                return `
          background-color: ${props.theme.accent};
          color: white;
        `;
        }
    }}
  
  ${props => props.$loading && `
    position: relative;
    color: transparent;
    
    &::after {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      left: 50%;
      margin: -8px 0 0 -8px;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: ${spin} 0.7s linear infinite;
    }
  `}
`;

const Button = ({
    children,
    variant = 'solid',
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    ...props
}) => {
    return (
        <StyledButton
            variant={variant}
            disabled={disabled || loading}
            onClick={onClick}
            type={type}
            $loading={loading}
            {...props}
        >
            {loading ? 'Carregando...' : children}
        </StyledButton>
    );
};

export default Button;