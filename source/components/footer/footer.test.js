import Footer from './footer';

describe('Footer component:', () => {
	const footer = shallow(<Footer />);

	it('should match snapshot', () => expect(footer).toMatchSnapshot());
});
