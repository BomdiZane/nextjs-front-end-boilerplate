//#region imports
import popupStyle from './popupStyle';

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { IconButton, Snackbar, SnackbarContent, withStyles } from '@material-ui/core';
import { CheckCircle, Error, Info, Close, Warning } from '@material-ui/icons';

import { togglePopup } from '../../state/actions/popupActions';
//#endregion

const variantIcon = {
	success: CheckCircle,
	warning: Warning,
	error: Error,
	info: Info,
};

const Popup = ({
	classes, 
	popup: { open, variant, message },
	togglePopup
}) => {
	const Icon = variantIcon[variant];

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			open={ open }
			autoHideDuration={ 3000 }
			onClose={ () => togglePopup({ open: false }) }
		>
			<SnackbarContent
				className={ classes[variant] }
				aria-describedby="client-snackbar"
				message={
					<span id="client-snackbar" className={ classes.message }>
						<Icon className={ classnames(classes.icon, classes.iconVariant) } />
						{ message }
					</span>
				}
				action={
					[
						<IconButton
							key="close"
							aria-label="Close"
							color="inherit"
							className={ classes.close }
							onClick={ () => togglePopup({ open: false }) }
						>
							<Close className={ classes.icon } />
						</IconButton>,
					]
				}
			/>
		</Snackbar>
	);
};

const mapStateToProps = state => ({
	popup: state.popup,
});

const mapDispatchToProps = dispatch => ({
	togglePopup: options => dispatch(togglePopup(options)),
});

Popup.propTypes = {
	classes: PropTypes.object.isRequired,
	togglePopup: PropTypes.func.isRequired,
	popup: PropTypes.shape({
		open: PropTypes.bool.isRequired,
		variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
		message: PropTypes.string.isRequired,
	}),
};

export default compose(
	withStyles(popupStyle, {
		name: 'Popup',
		withTheme: true
	}),
	connect(mapStateToProps, mapDispatchToProps),
)(Popup);
