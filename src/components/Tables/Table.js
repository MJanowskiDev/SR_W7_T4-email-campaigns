import { useMemo } from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';
import { MdOutlineEdit } from 'react-icons/md';
import { IoTrashSharp } from 'react-icons/io5';
import classes from './Table.module.css';
import PropTypes from 'prop-types';

function Table({ columnsData, rowsData, baseUrl }) {
	const data = useMemo(() => rowsData, [ rowsData ]);

	const columns = useMemo(
		() => {
			const actionButtons = {
				Header: 'Actions',
				accessor: 'actions',
				Cell: (props) => {
					const rowIdx = props.row.id;
					if (rowsData[rowIdx].protected) return <hr />;
					return (
						<div style={{ disabled: 'true' }} className={classes.ActionButtons}>
							<Link state={rowsData[rowIdx]} to={`${baseUrl}/${rowsData[rowIdx].id}/edit`}>
								<MdOutlineEdit size={24} />
							</Link>
							<Link state={rowsData[rowIdx]} to={`${baseUrl}/${rowsData[rowIdx].id}/remove`}>
								<IoTrashSharp size={24} />
							</Link>
						</div>
					);
				}
			};

			return [ ...columnsData, actionButtons ];
		},
		[ columnsData, baseUrl, rowsData ]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

	return (
		<div className={classes.TableContainer}>
			<table className={classes.Table} {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

Table.propTypes = {
	columnsData: PropTypes.array.isRequired,
	rowsData: PropTypes.array.isRequired,
	baseUrl: PropTypes.string.isRequired
};

export default Table;
