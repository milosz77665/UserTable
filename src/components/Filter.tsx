import DropDownList from "./DropDownList";
import styled from "styled-components";
import Input from "./Input";
import { ChangeEvent } from "react";

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
`;

interface Filter<T> {
  keyNames: (keyof T)[];
  columnNames: string[];
  selectedOption: keyof T;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDropDownListChange: (selectedValue: keyof T) => void;
}

const Filter = <T,>({
  keyNames,
  columnNames,
  selectedOption,
  handleInputChange,
  handleDropDownListChange,
}: Filter<T>) => {
  return (
    <FilterContainer>
      <DropDownList<T>
        options={keyNames}
        visibleOptions={columnNames}
        selectedOption={String(selectedOption)}
        onChange={handleDropDownListChange}
      />
      <Input type="text" onChange={handleInputChange} />
    </FilterContainer>
  );
};

export default Filter;
