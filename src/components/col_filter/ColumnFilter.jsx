import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { InputGroup, FormControl } from "react-bootstrap";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  const [value, setValue] = useState(filterValue);

  // dodajemy minimalne opóźnienie rozpoczęcia wyszukiwania aż user skończy wpisywać jakieś słowo
  const handleChangingToSetFilter = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 250);

  const handleChangingValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search">
      <InputGroup className="text-start">
        <InputGroup.Text>{"\u225C"}</InputGroup.Text>
        <FormControl
          value={value || ""}
          onChange={(e) => {
            handleChangingValue(e);
            handleChangingToSetFilter(e.target.value);
          }}
          placeholder="Search"
          aria-label="Search"
        />
      </InputGroup>
    </div>
  );
};
