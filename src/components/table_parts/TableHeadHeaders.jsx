import React from "react";
import FilterComp from "../col_filter/FilterComp";
import SortingIndicator from "./SortingIndicator";

const TableHeadHeaders = ({ column }) => {
  return (
    <th {...column.getHeaderProps()}>
      <div {...column.getSortByToggleProps()}>
        {column && column.render("Header")}
        <SortingIndicator column={column} />
      </div>
      <FilterComp column={column} styleForFilterComp={{ marginTop: "15px" }} />
    </th>
  );
};

export default TableHeadHeaders;
