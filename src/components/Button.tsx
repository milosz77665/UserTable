import { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`color: #eddede;
  background-color: #223780;
  padding: 0.5em;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #14214d;`;

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
