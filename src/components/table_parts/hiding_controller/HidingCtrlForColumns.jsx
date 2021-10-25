import React from "react";
import { Form } from "react-bootstrap";

const HidingCtrlForColumns = ({ allColumns }) => {
  return allColumns.map((column) => (
    <span key={column.id} className="hideColumnCheckboxes">
      <Form className="d-inline-block">
        <Form.Check
          label={typeof column.Header !== "string" ? column.id : column.Header}
          className="ms-sm-3 ms-2 me-1"
          {...column.getToggleHiddenProps()}
        />
      </Form>
    </span>
  ));
};

export default HidingCtrlForColumns;
