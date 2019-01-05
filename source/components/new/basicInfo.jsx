//#region imports
import newStyle from './newStyle';

import { Fragment } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { Typography, TextField, withStyles, InputAdornment, IconButton } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';

import {
	updateFirstName,
	updateLastName,
	updateBags,
	updatePassword,
	updatePasswordmatch,
	toggleShowPassword
} from '../../state/actions/user/newActions';
import { formatName } from '../../utils/helpers';

const { passwordRules, bagsMax } = require( '../../utils/constants');
//#endregion

const nameRegExp = /[a-zA-Z\s]{2,20}/;
const passwordRegExp = /(?=.*[!@#$%^&_=+\-*\d])(?=.*[a-z])(?=.*[A-Z]).{8,}/;

const BasicInfo = ({
	createNew: { 
		newDetails: { firstName, lastName, bags, password, passwordMatch, }, 
		showPassword 
	},
	updateFirstName,
	updateLastName,
	updateBags,
	updatePassword,
	updatePasswordmatch,
	toggleShowPassword,
	classes: { textField, sectionHeader }
}) => {

	const firstNameChanged = e => {
			let options = initializeOptions(e.target.value);

			if (!nameRegExp.test(options.value)) options.isValid = false;
			updateFirstName(options);
		},
		lastNameChanged = e => {
			let options = initializeOptions(e.target.value);
			
			if (!nameRegExp.test(options.value)) options.isValid = false;
			updateLastName(options);
		},
		bagsChanged = e => {
			let options = initializeOptions(e.target.value),
				numberOfBags = Number(options.value) || 0;

			if (!(numberOfBags > 0 && numberOfBags <= 5)) options.isValid = false;
			updateBags(options);
		},
		passwordChanged = e => {
			let options = initializeOptions(e.target.value);

			if (!passwordRegExp.test(options.value)) options.isValid = false;
			updatePassword(options);
		},
		passwordMatchChanged = e => {
			let options = initializeOptions(e.target.value);

			if (options.value !== password.value) options.isValid = false;
			updatePasswordmatch(options);
		},
		initializeOptions = value => {
			let options = {
				value,
				isValid: true,
				showErrors: true
			};
			if (options.value.trim().length < 1) options.isValid = false;

			return options;
		};
	
	return (
		<Fragment>
			<Typography variant='body1' className={ sectionHeader }>Basic Information needed to handle your request</Typography>
			<Typography variant='body1' style={{ fontSize: '12px', width: '100%' }}>fields with * are required</Typography>
			<TextField
				id = 'firstName'
				label = 'First Name'
				placeholder = 'Enter your first name'
				className = { textField }
				value = { firstName.value }
				onChange = { firstNameChanged }
				required = { true }
				error = { firstName.showErrors && !firstName.isValid }
			/>
			<TextField
				id = 'lastName'
				label = 'Last Name'
				placeholder = 'Enter your last name'
				className = { textField }
				value = { lastName.value }
				onChange = { lastNameChanged }
				required = { true }
				error = { lastName.showErrors && !lastName.isValid }
			/>
			<TextField
				id = 'password'
				type = 'password'
				label = 'Password'
				placeholder = 'Enter your password'
				helperText = { !password.isValid && passwordRules }
				className = { textField }
				value = { password.value }
				onChange = { passwordChanged }
				required = { true }
				error = { password.showErrors && !password.isValid }
				inputProps = {{ pattern: passwordRegExp }}
				InputProps = {{
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton
								aria-label = 'Toggle password visibility'
								onClick = { toggleShowPassword }
							>
								{ showPassword ? <Visibility /> : <VisibilityOff /> }
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<TextField
				id = 'passwordMatch'
				type = 'password'
				label = 'Re-enter Password'
				placeholder = 'Re-enter your password'
				className = { textField }
				value = { passwordMatch.value }
				onChange = { passwordMatchChanged }
				required = { true }
				error = { passwordMatch.showErrors && !passwordMatch.isValid }
				InputProps = {{
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton
								aria-label = 'Toggle password visibility'
								onClick = { toggleShowPassword }
							>
								{ showPassword ? <Visibility /> : <VisibilityOff /> }
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<TextField
				id = 'bags'
				type = 'number'
				label = 'Bags'
				placeholder = 'Enter number of bags'
				className = { textField }
				value = { bags.value }
				onChange = { bagsChanged }
				required = { true }
				error = { bags.showErrors && !bags.isValid }
				inputProps = {{ 
					min: 0,
					max: bagsMax	
				}}
			/>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	createNew: state.createNew,
});
  
const mapDispatchToProps = dispatch => ({
	updateFirstName: firstName => dispatch(updateFirstName(firstName)),
	updateLastName: lastName => dispatch(updateLastName(lastName)),
	updateBags: email => dispatch(updateBags(email)),
	updatePassword: password => dispatch(updatePassword(password)),
	updatePasswordmatch: passwordMatch => dispatch(updatePasswordmatch(passwordMatch)),
	toggleShowPassword: () => dispatch(toggleShowPassword()),
});

BasicInfo.propTypes = {
	createNew: PropTypes.shape({
		newDetails: PropTypes.shape({
			firstName: PropTypes.shape({
				value: PropTypes.string.isRequired,
				isValid: PropTypes.bool.isRequired
			}),
			lastName: PropTypes.shape({
				value: PropTypes.string.isRequired,
				isValid: PropTypes.bool.isRequired
			}),
			bags: PropTypes.shape({
				value: PropTypes.string.isRequired,
				isValid: PropTypes.bool.isRequired
			}),
			password: PropTypes.shape({
				value: PropTypes.string.isRequired,
				isValid: PropTypes.bool.isRequired
			}),
			passwordMatch: PropTypes.shape({
				value: PropTypes.string.isRequired,
				isValid: PropTypes.bool.isRequired
			}),
		}),
		showPassword: PropTypes.bool.isRequired
	}),
	updateBags: PropTypes.func.isRequired,
	updatePassword: PropTypes.func.isRequired,
	updatePasswordmatch: PropTypes.func.isRequired,
	updateFirstName: PropTypes.func.isRequired,
	updateLastName: PropTypes.func.isRequired,
	toggleShowPassword: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired
};
  
export default compose(
	withStyles(newStyle),
	connect(mapStateToProps, mapDispatchToProps)
)(BasicInfo);
