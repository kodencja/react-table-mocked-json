import React from "react";
import TableHeadHeaders from "./TableHeadHeaders";

const TableHead = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups &&
        headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="container">
            {headerGroup.headers.map((column, ind) => (
              <TableHeadHeaders column={column} key={ind} />
            ))}
          </tr>
        ))}
    </thead>
  );
};

export default TableHead;
