import { createMuiTheme } from '@material-ui/core';
import { grey, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue['500']
		},
		secondary: {
			main: grey['50']
		},
	},
	zIndex: {
		modal: 1600,
	},
	props: {
		MuiButton: {
			size: 'small',
			color: 'primary',
			variant: 'contained'
		},
	},
	overrides: {
		MuiTooltip: {
			tooltip: {
				fontSize: '11px'
			}
		},
		MuiCircularProgress: {
			colorPrimary: {
				color: 'crimson'
			}
		},
		MuiTypography: {
			root: {
				cursor: 'default'
			}
		},
	}
});

export default theme;
