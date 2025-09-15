import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const StyledSkeleton = styled.div`
  background-color: ${props => props.theme.skeleton};
  position: relative;
  overflow: hidden;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.$borderRadius};
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: ${props =>
        props.theme.name === 'dark'
            ? `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.05) 20%,
            rgba(255, 255, 255, 0.1) 60%,
            rgba(255, 255, 255, 0)
          )`
            : `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
          )`};
    animation: ${shimmer} 2s infinite;
  }
`;

const Skeleton = ({ width = '100%', height = '1rem', borderRadius }) => {
    return (
        <StyledSkeleton
            width={width}
            height={height}
            $borderRadius={borderRadius}
            aria-hidden="true"
        />
    );
};

export default Skeleton;