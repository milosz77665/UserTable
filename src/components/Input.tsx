import { ChangeEvent, FC } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 250px;
  background-color: #1e1e1e;
  color: #eddede;
  border: 2px solid #223780;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 1.2rem;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: #223780;
  }

  &:focus {
    border-color: #223780;
    box-shadow: 0 0 8px rgb(56, 75, 141, 0.5);
  }
`;

interface InputProps {
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, onChange }) => {
  return <StyledInput type={type} onChange={onChange}></StyledInput>;
};

export default Input;
