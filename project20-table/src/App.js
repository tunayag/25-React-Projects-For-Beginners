import React from 'react'
import tempData from "./DATA.json"
import { useTable } from "react-table"

function App() {
    const data = React.useMemo(() => tempData, []);
    const columns = React.useMemo(() => [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "First Name",
            accessor: "first_name",
        },
        {
            Header: "E-Mail",
            accessor: "email",
        },
        {
            Header: "Gender",
            accessor: "gender",
        },
        {
            Header: "University",
            accessor: "university",
        },

    ], [])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

    return (
        <div className='App'>
            <div className="container">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App