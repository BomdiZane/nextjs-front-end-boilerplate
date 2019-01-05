import Home from '../../pages/index';

describe('Home component:', () => {
	const home = shallow(<Home />);

	it('should match snapshot', () => expect(home).toMatchSnapshot());
});
