import React from "react";
import PageButton from "./PageButton";
import { Col } from "react-bootstrap";

const PageButtons = ({ pageProps, pageJump }) => {
  const {
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageIndex,
    gotoPage,
    pageCount,
  } = pageProps;

  return (
    <Col sm="6" md="5" className="ms-2 me-2">
      <PageButton
        onHanldeOnClick={() => gotoPage(0)}
        onDisabled={!canPreviousPage}
        onText="|<"
      />
      <PageButton
        onHanldeOnClick={() =>
          gotoPage(pageIndex > pageJump - 1 ? pageIndex - pageJump : 0)
        }
        onDisabled={!canPreviousPage || pageIndex < pageJump - 1}
        onText="<<"
      />
      <PageButton
        onHanldeOnClick={() => previousPage()}
        onDisabled={!canPreviousPage}
        onText="Prev"
      />
      <PageButton
        onHanldeOnClick={() => nextPage()}
        onDisabled={!canNextPage}
        onText="Next"
      />
      <PageButton
        onHanldeOnClick={() =>
          gotoPage(
            pageIndex < pageJump - 1
              ? pageJump - 1
              : pageIndex < pageCount - pageJump
              ? pageIndex + pageJump
              : pageCount - 1
          )
        }
        onDisabled={!canNextPage || pageIndex + 1 > pageCount - pageJump}
        onText=">>"
      />
      <PageButton
        onHanldeOnClick={() => gotoPage(pageCount - 1)}
        onDisabled={!canNextPage}
        onText=">|"
      />
    </Col>
  );
};

export default PageButtons;
