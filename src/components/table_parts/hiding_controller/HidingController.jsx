import React from "react";
import CheckBox from "../../check_box/CheckBox";
import HidingCtrlForColumns from "./HidingCtrlForColumns";

const HidingController = ({
  getToggleHideAllColumnsProps,
  allColumns,
  text,
}) => {
  return (
    <div className="text-start me-3 mt-2">
      <span className="ms-1 me-2 fst-italic h6">{text}</span>
      <CheckBox
        {...getToggleHideAllColumnsProps()}
        labelTxt="Wszystko"
        className="me-1"
      />
      <HidingCtrlForColumns allColumns={allColumns} />
    </div>
  );
};

export default React.memo(HidingController);
