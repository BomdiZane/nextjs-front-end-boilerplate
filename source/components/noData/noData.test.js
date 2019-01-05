import NoData from './index';

describe('NoData component:', () => {
	const noData = shallow(<NoData  />);

	it('should match snapshot', () => expect(noData).toMatchSnapshot());
});
