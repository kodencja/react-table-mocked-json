import React from "react";

const FilterComp = ({ column, styleForFilterComp }) => {
  return (
    <div style={styleForFilterComp || undefined}>
      {column.canFilter ? column.render("Filter") : null}
    </div>
  );
};

export default FilterComp;
