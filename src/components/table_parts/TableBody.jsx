import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ page, getTableBodyProps, prepareRow }) => {
  return (
    <tbody {...getTableBodyProps()}>
      {page &&
        page.map((row, i) => {
          prepareRow(row);
          return <TableRow row={row} key={i} />;
        })}
    </tbody>
  );
};

export default React.memo(TableBody);
