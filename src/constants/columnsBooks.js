import {format} from 'date-fns';

export const COLUMNS = [
    {
        Header: "Ident",
        accessor: 'ident',
        disableFilters: true
    },
    {
        Header: "Tytuł",
        accessor: 'tytul_polski',
    },
    {
        Header: "Liczba stron",
        accessor: 'liczba_stron',
    },
    {
        Header: "Data wydania",
        accessor: 'data_wydania',
        Cell: ({value}) => { return format(new Date(value), 'yyyy, MM/dd')},
    }
]