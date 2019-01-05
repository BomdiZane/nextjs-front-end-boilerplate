export default theme => ({
	appBar: {
		position: 'fixed',
		display: 'flex',
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	grow: {
		flexGrow: 1,
	},
	title: {
		cursor: 'pointer',
		marginLeft: '7%',
	},
});
