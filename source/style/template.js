import { defaultShadow, defaultRadius } from './variables';

export const AppRoot = theme => ({
	root: {
		flexGrow: 1,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
	},
});

export const paperStyles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		paddingLeft: theme.spacing.unit * 2,
		paddingRight: theme.spacing.unit * 2,
	},
});

export const buttonStyles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	},
	iconSmall: {
		fontSize: 20,
	},
});

const templateStyles = {
	formHolder : {
		paddingLeft: '10px',
		paddingRight: '10px',
		backgroundColor: 'white',
		boxShadow: defaultShadow,
		borderRadius: defaultRadius,
		marginTop: '20px',
		width: 'unset',
	},
	form: { 
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexWrap: 'wrap'
	},
	buttonHolder: {
		display: 'flex',
		minHeight: '40px',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%'
	},
	pWithIcon: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	accordion: {
		root: {
			width: '100%',
		},
	},
	links: {
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
	}
};

export default templateStyles;
