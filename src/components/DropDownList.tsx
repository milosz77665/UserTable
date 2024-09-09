import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 8px;
  border: 2px solid #1e1e1e;
  border-radius: 4px;
  background-color: #1e1e1e;
  color: #eddede;
  font-size: 1.2rem;
  transition: border-color 0.3s;

  &:hover {
    border-color: #223780;
  }

  &:focus {
    border-color: #223780;
    outline: none;
  }
`;

const StyledOption = styled.option`
  background-color: #1e1e1e;
  color: #eddede;
`;

interface DropDownListProps<T> {
  options: (keyof T)[];
  visibleOptions: string[];
  selectedOption: string;
  onChange: (selectedValue: keyof T) => void;
}

const DropDownList = <T,>({ options, visibleOptions, selectedOption, onChange }: DropDownListProps<T>) => {
  return (
    <StyledSelect
      value={selectedOption}
      onChange={(event) => {
        onChange(event.target.value as keyof T);
      }}
    >
      {options.map((option, index) => (
        <StyledOption key={index} value={String(option)}>
          {visibleOptions[index]}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default DropDownList;
