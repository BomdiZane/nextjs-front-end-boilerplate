import Info from '../../pages/info';

describe('Info component:', () => {
	const info = shallow(<Info />);

	it('should match snapshot', () => expect(info).toMatchSnapshot());
});
