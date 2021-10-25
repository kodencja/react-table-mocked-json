import CheckBox from "../check_box/CheckBox";
     
// useHook to create the selection column - the first one from left
const useTableHooks = (col_title) => {

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        {
          id: col_title,
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <CheckBox {...getToggleAllPageRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <CheckBox {...row.getToggleRowSelectedProps()} />,
        },
        // spread rest of the columns
        ...columns,
      ];
    });
  };

  return tableHooks;

}

export default useTableHooks
