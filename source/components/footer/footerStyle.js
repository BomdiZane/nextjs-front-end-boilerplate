import { defaultShadow } from '../../style/variables';

const footerStyle = {
	pageFooter : {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '25px 2em',
		backgroundColor: 'white',
		boxShadow: defaultShadow
	},
	logo: {
		backgroundColor: 'white',
		position: 'absolute',
		left: 'calc(50% - 20px)',
		top: '-21px',
	},
	linkHolder: { 
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'relative',
		zIndex: '5'
	},
	link: {
		margin: '0 1em',
		textDecoration: 'none',
	},
	linkText: {
		cursor: 'pointer',
		color: '#42A5F5',
	}
};

export default footerStyle;
