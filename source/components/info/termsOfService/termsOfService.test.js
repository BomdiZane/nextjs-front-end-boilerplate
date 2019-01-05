import TermsOfService from './index';

describe('TermsOfService component:', () => {
	const termsOfService = shallow(<TermsOfService />);

	it('should match snapshot', () => expect(termsOfService).toMatchSnapshot());
});
