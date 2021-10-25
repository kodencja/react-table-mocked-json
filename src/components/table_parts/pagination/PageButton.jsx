import React from "react";
import { Button, Pagination } from "react-bootstrap";

const PageButton = ({ onHanldeOnClick, onDisabled, onText }) => {
  return (
    <Button
      onClick={onHanldeOnClick}
      disabled={onDisabled}
      variant="outline-primary"
      size="sm"
      className="ms-1 page-buttons px-1 px-sm-2"
    >
      {onText}
    </Button>
  );
};

export default PageButton;
