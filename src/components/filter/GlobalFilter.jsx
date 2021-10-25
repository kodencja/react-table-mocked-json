import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { InputGroup, FormControl } from "react-bootstrap";

export const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const [value, setValue] = useState(globalFilter);

  //how many rows there are to filter
  const count = preGlobalFilteredRows.length;

  const handleChanging = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 250);

  return (
    <div className="d-block my-3">
      <InputGroup className="global-search text-end">
        <InputGroup.Text>Search:</InputGroup.Text>
        <FormControl
          className="input-search"
          onChange={(e) => {
            setValue(e.target.value);
            handleChanging(e.target.value);
          }}
          value={value || ""}
          placeholder={`${count} records...`}
          aria-label={`${count} records...`}
        />
      </InputGroup>
    </div>
  );
};
