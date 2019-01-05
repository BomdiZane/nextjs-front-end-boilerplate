export default theme => ({
	content: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '50px',
		paddingBottom: '120px',
		minHeight: '100vh',
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
	}
});
