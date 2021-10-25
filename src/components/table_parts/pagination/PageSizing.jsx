import React from "react";
import { Form, Col } from "react-bootstrap";

const PageSizing = ({ pageSize, setPageSize }) => {
  return (
    <Col
      className="text-end justify-content-end d-inline my-1 my-sm-0 fw-light"
      xs="6"
      sm="4"
      md="3"
      lg="2"
    >
      <Form.Label className="me-1 d-none d-sm-inline">Per page</Form.Label>
      <Form.Select
        className="pageSizing d-inline"
        aria-label="Rows per page"
        value={pageSize}
        size="sm"
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[5, 10, 20, 30, 40, 50].map((pageSizeNo) => (
          <option key={pageSizeNo} value={pageSizeNo}>
            {pageSizeNo}
          </option>
        ))}
      </Form.Select>
    </Col>
  );
};

export default PageSizing;
