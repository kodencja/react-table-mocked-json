import React from "react";
import { Form, Col } from "react-bootstrap";

const GoToPage = ({ pageCount, gotoPage }) => {
  const handleGotoPage = (e) => {
    const pageNumber = e.target.value ? Number(e.target.value) : 0;
    gotoPage(pageNumber);
  };

  return (
    <Col
      className="text-end justify-content-end d-inline my-1 my-sm-0"
      sm="4"
      md="3"
      lg="2"
    >
      <Form.Label className="me-1">Go to</Form.Label>
      <Form.Select
        className="gotoPage d-inline"
        aria-label="Go to page"
        onChange={handleGotoPage}
        size="sm"
      >
        {[...Array(pageCount)].map((no, i) => (
          <option key={i} value={i}>
            {i + 1}
          </option>
        ))}
      </Form.Select>
    </Col>
  );
};

export default GoToPage;
