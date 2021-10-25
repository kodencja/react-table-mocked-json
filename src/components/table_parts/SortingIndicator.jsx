import React from "react";

const SortingIndicator = ({ column }) => {
  return (
    <span className="order-indicator" style={{ color: "#007ad7" }}>
      {column.isSorted ? (column.isSortedDesc ? " \u25bc" : " \u25b2") : " "}
    </span>
  );
};

export default React.memo(SortingIndicator);
