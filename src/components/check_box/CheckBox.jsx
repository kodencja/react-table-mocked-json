import React, { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";

const CheckBox = React.forwardRef(
  ({ indeterminate, labelTxt, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <Form className="d-inline-block">
        <Form.Check label={labelTxt} ref={resolvedRef} {...rest} />
      </Form>
    );
  }
);

export default CheckBox;
