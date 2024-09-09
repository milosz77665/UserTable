import { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledP = styled.p`
  font-size: 1.5rem;
  margin-top: 100px;
`;

interface ErrorInfoProps {
  children: ReactNode;
}

const ErrorInfo: FC<ErrorInfoProps> = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

export default ErrorInfo;
