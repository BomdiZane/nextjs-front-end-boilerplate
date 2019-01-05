import { gql } from 'apollo-boost';

const addNew = gql`
	mutation (
		$firstName: String!
		$lastName: String!
		$password: String!
		$bags: Int!
	){
		createUser (
			firstName: $firstName
			lastName: $lastName
			password: $password
			bags: $bags
		){
			id
			firstName
			lastName
			bags
		}
	}
`;

export {
	addNew
};
