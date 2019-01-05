import Social from './social';

describe('Social component:', () => {
	const social = shallow(<Social />);

	it('should match snapshot', () => expect(social).toMatchSnapshot());
});
