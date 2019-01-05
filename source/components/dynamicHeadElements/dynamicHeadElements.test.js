import DynamicHeadElements from './index';

describe('DynamicHeadElements component:', () => {
	const dynamicHeadElements = shallow(<DynamicHeadElements />);

	it('should match snapshot', () => expect(dynamicHeadElements).toMatchSnapshot());
});
