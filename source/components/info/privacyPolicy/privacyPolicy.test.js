import PrivacyPolicy from './index';

describe('PrivacyPolicy component:', () => {
	const privacyPolicy = shallow(<PrivacyPolicy />);

	it('should match snapshot', () => expect(privacyPolicy).toMatchSnapshot());
});
