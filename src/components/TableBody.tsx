import { ReactNode } from "react";
import styled from "styled-components";

const StyledTableData = styled.td`
  font-weight: 300;
  padding: 10px;
  color: #242423;
`;

const StyledTableBody = styled.tbody`
  display: block;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(34, 55, 128, 0.6);
    border-radius: 1px;
    border: 1px solid #eddede;
  }
`;

const StyledTableRow = styled.tr`
  table-layout: fixed;
  text-align: start;
  width: 100%;
  display: table;
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

const TableInfoData = styled.td`
  font-weight: 300;
  padding-top: 100px;
  text-align: center;
  color: #eddede;
  font-size: 1.5rem;
`;

interface TableBodyProps<T extends { id: number }> {
  keyNames: (keyof T)[];
  data: T[];
}

const TableBody = <T extends { id: number }>({ data, keyNames }: TableBodyProps<T>) => {
  return (
    <StyledTableBody>
      {data.length > 0 ? (
        data.map((item) => (
          <StyledTableRow key={item.id}>
            {keyNames.map((keyName) => (
              <StyledTableData key={`${item.id}${String(keyName)}`}>
                {String(item[keyName] as ReactNode)}
              </StyledTableData>
            ))}
          </StyledTableRow>
        ))
      ) : (
        <tr>
          <TableInfoData colSpan={keyNames.length}>No data</TableInfoData>
        </tr>
      )}
    </StyledTableBody>
  );
};

export default TableBody;
