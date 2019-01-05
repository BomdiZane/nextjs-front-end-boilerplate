import templateStyles from '../../style/template';
import { defaultShadow, defaultRadius } from '../../style/variables';

const createAccountStyle = theme => ({
	formHolder: templateStyles.formHolder,
	section: {
		width: '80% !important',
		maxWidth: '800px',
		padding: '20px 0',
	},
	sectionHeader: {
		width: '100%',
		textAlign: 'center',
		marginBottom: theme.spacing.unit * 2,
	},
	stepper: {
		paddingTop: theme.spacing.unit * 1.5,
		paddingBottom: theme.spacing.unit * 1.5,
		boxShadow: defaultShadow,
		borderRadius: defaultRadius,
		// backgroundColor: 'seashell'
	},
	textField: {
		margin: theme.spacing.unit * 1.5,
		width: '42%',
		minWidth: '300px',
		flexGrow: 1,
	},
	textFieldFullWidth: {
		width: '90%',
	},
	buttonHolder: {
		...templateStyles.buttonHolder,
		minHeight: 'unset',
		margin: theme.spacing.unit * 2,
	},
	form: {
		...templateStyles.form,
		paddingLeft: theme.spacing.unit * 1.5,
		paddingRight: theme.spacing.unit * 1.5,
	},
	menu: {
		minWidth: 200,
	},
	avatar: {
		backgroundColor: 'indianred',
		marginTop: '-15px',
		marginBottom: '15px',
	},
	...templateStyles.links,
});

export default createAccountStyle;
