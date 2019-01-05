import Header from './header';

describe('Header component:', () => {
	const header = shallow(<Header />);

	it('should match snapshot', () => expect(header).toMatchSnapshot());
});
