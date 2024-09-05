import { FC } from "react";
import styled from "styled-components";

const StyledTableHeader = styled.th`
  text-align: start;
  padding: 15px;
  background-color: #223780;
  font-weight: 400;

  &:first-child {
    border: none;
    border-radius: 5px 0 0 0;
  }

  &:last-child {
    border-radius: 0 5px 0 0;
  }
`;

interface TableHeadRowProps {
  columnNames: string[];
}

const TableHeadRow: FC<TableHeadRowProps> = ({ columnNames }) => {
  return (
    <thead>
      <tr>
        {columnNames.map((columnName) => (
          <StyledTableHeader key={columnName}>{columnName}</StyledTableHeader>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeadRow;
