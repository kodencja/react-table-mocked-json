import React from "react";

const TableRow = ({ row }) => {
  return (
    <tr {...row.getRowProps()}>
      {row &&
        row.cells.map((cell) => {
          return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
        })}
    </tr>
  );
};

export default TableRow;
