import App from '../../pages/_app';

describe('App component:', () => {
	const app = shallow(<App />);

	it('should match snapshot', () => expect(app).toMatchSnapshot());
});
