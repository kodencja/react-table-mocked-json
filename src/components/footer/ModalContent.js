import React, { useContext } from "react";
import { ModalContext } from "./Footer";
import("../../styles/modalContent.css");

function ModalContent() {
  const modalContextValue = useContext(ModalContext);
  const { handleModalOpen, pageInfoTxt, gitUrl } = modalContextValue;
  // console.log("ModalContent Fn");

  return (
    <>
      <div className="btn-close2">
        <button
          className="btn close-btn btn-sm"
          onClick={() => handleModalOpen(false)}
        >
          X
        </button>
      </div>

      <p className="title-code">Webdeveloping information</p>
      <div className="dialog-question dev-box">
        <div>
          <p>
          {pageInfoTxt}
          </p>
          <a
            href={gitUrl}
            target="_blank"
            rel="noreferrer"
          >
            See the code
          </a>
        </div>
      </div>
    </>
  );
}

export default React.memo(ModalContent);
