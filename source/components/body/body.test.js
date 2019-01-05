import Body from './body';

describe('Body component:', () => {
	const body = shallow(<Body />);

	it('should match snapshot', () => expect(body).toMatchSnapshot());
});
