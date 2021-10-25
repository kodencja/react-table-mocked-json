import React from "react";
import { Badge, Col } from "react-bootstrap";

const PageInfo = ({ pageIndex, pageOptions }) => {
  return (
    <Col xs="6" sm="4" md="3" lg="2" className="my-1 my-sm-0 fw-light">
      Page <Badge bg="secondary">{pageIndex + 1}</Badge> of{" "}
      <Badge bg="secondary">{pageOptions.length}</Badge>{" "}
    </Col>
  );
};

export default PageInfo;
