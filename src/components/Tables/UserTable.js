import Table from 'components/Tables/Table';
import PropTypes from 'prop-types';

function UserTable({ subscribers }) {
	const columns = [
		{
			Header: 'Email',
			accessor: 'email'
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
UserTable.propTypes = {
	subscribers: PropTypes.array.isRequired
};
export default UserTable;
