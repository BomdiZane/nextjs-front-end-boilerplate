import CreateAccount from './index';

describe('CreateAccount component:', () => {
	const createAccount = shallow(<CreateAccount store={ store } />);

	it('should match snapshot', () => expect(createAccount).toMatchSnapshot());
});
