import UserCard from './userCard';

describe('UserCard component:', () => {
	const userCard = shallow(<UserCard />);

	it('should match snapshot', () => expect(userCard).toMatchSnapshot());
});
