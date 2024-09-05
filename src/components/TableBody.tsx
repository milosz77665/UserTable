import { ReactNode } from "react";
import styled from "styled-components";

const StyledTableBody = styled.tbody``;

const StyledTableData = styled.td`
  font-weight: 300;
  padding: 10px;
  color: #242423;
`;

const StyledTableRow = styled.tr`
  background-color: #a7adc6;
  transition: background-color 0.2s;

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  &:last-child td:first-child {
    border-radius: 0 0 0 5px;
  }

  &:last-child td:last-child {
    border-radius: 0 0 5px 0;
  }

  &:nth-child(odd) {
    background-color: #8797af;
  }

  &:hover {
    background-color: #868a9e;
  }
`;

interface TableBodyProps<T extends { id: number }> {
  keyNames: (keyof T)[];
  data: T[];
}

const TableBody = <T extends { id: number }>({ data, keyNames }: TableBodyProps<T>) => {
  return (
    <StyledTableBody>
      {data.map((item) => (
        <StyledTableRow key={item.id}>
          {keyNames.map((keyName) => (
            <StyledTableData key={`${item.id}${String(keyName)}`}>{String(item[keyName] as ReactNode)}</StyledTableData>
          ))}
        </StyledTableRow>
      ))}
    </StyledTableBody>
  );
};

export default TableBody;
