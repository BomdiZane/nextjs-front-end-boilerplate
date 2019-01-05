import { gql } from 'apollo-boost';

const getUsers = gql`
	{
		users{
			id
			firstName
			lastName
			bags
		}
	}
`;

export {
	getUsers
};
