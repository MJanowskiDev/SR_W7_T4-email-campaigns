import Table from 'components/Tables/Table';
function ReactTable({ subscribers }) {
	const columns = [
		{
			Header: 'Email',
			accessor: 'email' // accessor is the "key" in the data
		},
		{
			Header: 'Name',
			accessor: 'name'
		},
		{
			Header: 'Created at',
			accessor: 'created-at'
		}
	];
	return (
		<div>
			<Table columnsData={columns} rowsData={subscribers} />
		</div>
	);
}

export default ReactTable;
