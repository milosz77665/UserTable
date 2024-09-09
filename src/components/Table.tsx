import styled from "styled-components";
import TableHeadRow from "./TableHeadRow";
import TableBody from "./TableBody";

const StyledTable = styled.table`
  font-size: 1.3rem;
  border-collapse: separate;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0 0 5px 5px;
  word-break: break-all;
`;

interface TableProps<T extends { id: number }> {
  data: T[];
  keyNames: (keyof T)[];
  columnNames: string[];
}

const Table = <T extends { id: number }>({ data, keyNames, columnNames }: TableProps<T>) => {
  return (
    <StyledTable>
      <TableHeadRow columnNames={columnNames} />
      <TableBody<T> data={data} keyNames={keyNames} />
    </StyledTable>
  );
};

export default Table;
