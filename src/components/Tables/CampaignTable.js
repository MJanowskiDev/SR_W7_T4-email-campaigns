import Table from 'components/Tables/Table';
function CampaignTable({ campaigns }) {
	const columns = [
		{
			Header: 'Subject',
			accessor: 'subject' // accessor is the "key" in the data
		},
		{
			Header: 'Content',
			accessor: 'content'
		},
		{
			Header: 'Created at',
			accessor: 'created-at'
		},
		{
			Header: 'Status',
			accessor: 'status'
		}
	];
	return (
		<div>
			<Table columnsData={columns} rowsData={campaigns} baseUrl='/campaign' />
		</div>
	);
}

export default CampaignTable;
