import Section from './section';

describe('Section component:', () => {
	const section = shallow(<Section />);

	it('should match snapshot', () => expect(section).toMatchSnapshot());
});
