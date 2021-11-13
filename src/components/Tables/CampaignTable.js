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
		}
	];
	return (
		<div>
			<Table columnsData={columns} rowsData={campaigns} />
		</div>
	);
}

export default CampaignTable;
