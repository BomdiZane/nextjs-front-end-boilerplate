const socialStyle = theme => ({
	fab: {
		margin: theme.spacing.unit,
		backgroundColor: '#E91E63',
		'&:hover': {
			backgroundColor: '#D81B60',
		}
	},
	holder: {
		zIndex: '1',
		position: 'fixed',
		right: '10px',
		bottom: '10px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	iconHolder: {
		display: 'none',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	icon: {
		width: '40px',
		height: '40px',
		borderRadius: '50%',
		cursor: 'pointer',
		boxShadow: '0 3px 6px rgba(0,0,0,0.3)'
	},
	link: {
		margin: '5px 0'
	}
});

export default socialStyle;
