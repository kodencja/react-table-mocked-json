import React, { useState, lazy, Suspense } from "react";
import("../../styles/footer.css");

const ModalComp = lazy(() => import("./ModalComp"));

export const ModalContext = React.createContext();

function Footer({ btnTxt1, btnTxt2, txt1, txt2, txt3 }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const pageInfoTxt =
    "The application displays data json in a table supported by react-table, react-bootstrap and bootstrap 5.0, with global and column filtering and pagination. The table has filtering (global and in columns), pagination, sorting by columns, hide / show checkboxes and one extra column for selection.";

  const gitUrl = "https://github.com/kodencja/react-table-mocked-json";

  // console.log("Footer Comp.");

  return (
    <footer className="down-buttons">
      <a
        href="https://codencja.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        <button type="link" className="btn-down home-page-link">
          {btnTxt1}
        </button>
      </a>
      <div className="footer">
        {" "}
        <b>{txt1} </b>
        <i>{txt2}</i> <strong>{txt3}</strong>
      </div>
      <button
        type="button"
        className="btn btn-down btn-code"
        onClick={(e) => {
          setModalIsOpen(true);
        }}
      >
        {btnTxt2}
      </button>

      <Suspense fallback={<p>Loading...</p>}>
        <ModalContext.Provider
          value={{
            modalIsOpen,
            handleModalOpen: setModalIsOpen,
            pageInfoTxt,
            gitUrl,
          }}
        >
          {/* <ModalComp isModalOpen={modalIsOpen} handleModalOpen={setModalIsOpen} /> */}
          <ModalComp />
        </ModalContext.Provider>
      </Suspense>
    </footer>
  );
}

// export default Footer;

export default React.memo(Footer);
