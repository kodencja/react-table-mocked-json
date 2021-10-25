import React from "react";

const HeaderMain = ({ title }) => {
  return (
    <header className="text-center h3 fw-bold text-success py-2 py-sm-3">
      {title}
    </header>
  );
};

export default HeaderMain;
