import { FC } from "react";
import styled from "styled-components";

const StyledTableHead = styled.thead`
  display: table;
  table-layout: fixed;
  background-color: #223780;
  border-radius: 5px 5px 0 0;
  width: 100%;
`;

const StyledTableHeader = styled.th`
  text-align: start;
  padding: 15px;
  font-weight: 400;
`;

interface TableHeadRowProps {
  columnNames: string[];
}

const TableHeadRow: FC<TableHeadRowProps> = ({ columnNames }) => {
  return (
    <StyledTableHead>
      <tr>
        {columnNames.map((columnName) => (
          <StyledTableHeader key={columnName}>{columnName}</StyledTableHeader>
        ))}
      </tr>
    </StyledTableHead>
  );
};

export default TableHeadRow;
