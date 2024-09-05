import { FC } from "react";
import SpinnerIcon from "../assets/icons/SpinnerIcon";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinnerIcon = styled(SpinnerIcon)`
  animation: ${spin} 1s linear infinite;
`;

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size, color }) => {
  return <StyledSpinnerIcon size={size} color={color} />;
};

export default LoadingSpinner;
