import React from "react";
import GoToPage from "./GoToPage";
import PageSizing from "./PageSizing";
import PageInfo from "./PageInfo";
import PageButtons from "./PageButtons";
import { Col, Row } from "react-bootstrap";

const PageController = ({ pageProps }) => {
  const { pageIndex, pageOptions, gotoPage, pageCount, pageSize, setPageSize } =
    pageProps;

  return (
    <Col md={12}>
      <Row className="justify-content-end text-end my-2">
        <PageButtons pageProps={pageProps} pageJump={5} />
      </Row>
      <Row className="justify-content-end text-end my-3">
        <PageSizing pageSize={pageSize} setPageSize={setPageSize} />
        <PageInfo pageIndex={pageIndex} pageOptions={pageOptions} />

        <GoToPage pageCount={pageCount} gotoPage={gotoPage} />
      </Row>
    </Col>
  );
};

export default React.memo(PageController);
