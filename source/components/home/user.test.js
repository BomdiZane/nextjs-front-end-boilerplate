import Users from './users';

describe('Users component:', () => {
	const users = shallow(<Users store={ store } />);

	it('should match snapshot', () => expect(users).toMatchSnapshot());
});
