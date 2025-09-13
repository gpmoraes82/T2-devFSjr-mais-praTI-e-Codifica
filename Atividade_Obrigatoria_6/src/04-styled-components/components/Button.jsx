// import styled, { css } from "styled-components";

// const variantStyles = {
//   solid: css`
//     background: ${({ theme }) => theme.colors.primary};
//     color: #fff;
//     border: none;

//     &:hover:not(:disabled) {
//       background: ${({ theme }) => theme.colors.primaryHover};
//     }
//   `,
//   outline: css`
//     background: transparent;
//     color: ${({ theme }) => theme.colors.primary};
//     border: 1px solid ${({ theme }) => theme.colors.primary};

//     &:hover:not(:disabled) {
//       background: ${({ theme }) => theme.colors.primaryLight};
//     }
//   `,
//   ghost: css`
//     background: transparent;
//     color: ${({ theme }) => theme.colors.text};
//     border: none;

//     &:hover:not(:disabled) {
//       background: ${({ theme }) => theme.colors.surfaceHover};
//     }
//   `,
// };

// const Button = styled.button`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.5rem 1rem;
//   border-radius: ${({ theme }) => theme.radius.md};
//   font-size: 0.875rem;
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   outline: none;

//   ${({ $variant }) => variantStyles[$variant || "solid"]}

//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//   }

//   &:focus-visible {
//     box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.focus};
//   }
// `;

// export default Button;


import styled, { css } from "styled-components";

const variantStyles = {
    solid: css`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
    outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary}22;
    }
  `,
    ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: none;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.border};
    }
  `,
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.spacing.radius}; // CORRIGIDO: theme.spacing.radius
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition} ease;
  outline: none;

  ${({ $variant }) => variantStyles[$variant || "solid"]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}40;
  }
`;

export default Button;