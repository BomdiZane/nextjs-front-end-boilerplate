//#region imports
import { Fragment } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { Grid, Typography, CircularProgress } from '@material-ui/core';

import Section from '../section/section';
import UserCard from '../userCard/userCard';
import NoData from '../noData';

import { getUsers } from './usersQueries';
//#endregion

const UsersHolder = ({ data: { loading, users }}) => (
	loading ? 
		<CircularProgress />
		:
		(
			users ? 
				<Fragment>
					<Section>
						<Typography variant="h5">Users</Typography>
		
						{/* @TODO: Sorter goes here */}
					
					</Section>
					<Section>
						<Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={ 24 }>
							{
								users.map(provider => <Grid item xs={ 12 } md={ 3 } key={ provider.id }><UserCard provider={ provider } /></Grid>) // eslint-disable-line
							}
						</Grid>
					</Section>
		
					{/* @TODO: Pagination goes here */}
		
				</Fragment>
				:
				<NoData message='No users found!' />
		)
);

UsersHolder.propTypes = {
	data: PropTypes.shape({
		users: PropTypes.arrayOf(PropTypes.object),
		loading: PropTypes.bool.isRequired,
	}),
};

export default graphql(getUsers)(UsersHolder);
