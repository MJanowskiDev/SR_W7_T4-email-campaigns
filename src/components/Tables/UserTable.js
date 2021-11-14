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

	if (subscribers && subscribers.length === 0) return <p>No data to show</p>;

	return (
		<div>
			<Table columnsData={columns} rowsData={subscribers} baseUrl='/subscriber' />
		</div>
	);
}

export default ReactTable;
