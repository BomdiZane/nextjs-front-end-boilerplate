import About from './index';

describe('About component:', () => {
	const about = shallow(<About />);

	it('should match snapshot', () => expect(about).toMatchSnapshot());
});
