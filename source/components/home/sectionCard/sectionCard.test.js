import SectionCard from './index';

describe('SectionCard component:', () => {
	const sectionCard = shallow(<SectionCard />);

	it('should match snapshot', () => expect(sectionCard).toMatchSnapshot());
});
