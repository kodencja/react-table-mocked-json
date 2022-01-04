import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useFilters,
  useRowSelect,
  useColumnOrder,
} from "react-table";
import { GlobalFilter } from "./filter/GlobalFilter";
import { ColumnFilter } from "./col_filter/ColumnFilter";
import PageController from "./table_parts/pagination/PageController";
import { Container, Table, Row } from "react-bootstrap";
import TableBody from "./table_parts/TableBody";
import useTableHooks from "./custom_hooks/useTableHooks";
import TableHead from "./table_parts/TableHead";
import HidingController from "./table_parts/hiding_controller/HidingController";

const TableBooks = ({ columns, data }) => {
  // call custom useTableHooks to create selection column
  const tableHooks = useTableHooks("wybierz");

  // add 'Filter' attribute to every column created from database
  const defaultColumn = useMemo(() => {
    return { Filter: ColumnFilter };
  }, []);

  // invoke useTable hook with starting values
  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useColumnOrder,
    useRowSelect,
    tableHooks
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    preGlobalFilteredRows,
    state,
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <Container fluid>
      <Row>
        <HidingController
          getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
          allColumns={allColumns}
          text="Pokaż / ukryj: "
        />

        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />

        <Table
          responsive="sm"
          striped
          bordered
          hover
          className="bg-white mt-2"
          {...getTableProps()}
        >
          <TableHead headerGroups={headerGroups} />
          <TableBody
            page={page}
            getTableBodyProps={getTableBodyProps}
            prepareRow={prepareRow}
          />
        </Table>

        <PageController
          pageProps={{
            previousPage,
            nextPage,
            canNextPage,
            canPreviousPage,
            pageIndex,
            pageOptions,
            gotoPage,
            pageCount,
            pageSize,
            setPageSize,
          }}
        />
      </Row>
    </Container>
  );
};

export default TableBooks;
