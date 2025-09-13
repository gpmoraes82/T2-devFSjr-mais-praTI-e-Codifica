import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%,100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const Box = styled.div`
  width:100%;
  padding-top:100%; /* preserve 1:1 aspect */
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: ${({ theme }) => theme.spacing.radius};
  animation: ${pulse} 1.5s infinite;
`;

export default function Skeleton() {
    return <Box role="status" aria-hidden="true" aria-label="Carregando"></Box>;
}
