//#region imports
import newStyle from './newStyle';

// import Router from 'next/router';
import { Fragment } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { Typography, withStyles, Button } from '@material-ui/core';

import { addNew } from './newQueries';
import BasicInfo from './basicInfo';
import Section from '../section/section';
import { togglePopup } from '../../state/actions/popupActions';

// const pageURL = require('../../utils/pageURL');
//#endregion

const CreateNew = ({
	createNew: {
		newDetails: { 
			firstName, lastName, bags, password, passwordMatch, 
		}
	},
	classes: { section, formHolder, form, buttonHolder },
	togglePopup,
	addNewUser
}) => {

	const createNewUser = () => {
		if (isValidData()) {
			addNewUser({
				variables: {
					firstName: firstName.value,
					lastName: lastName.value,
					password: password.value,
					bags: Number(bags.value)
				}
			});
			togglePopup({
				open: true,
				variant: 'success',
				message: 'Success!',
			});
			// Router.push(pageURL.home.url, pageURL.home.as);
		}
		else togglePopup({
			open: true,
			variant: 'error',
			message: 'Please fill all required fields!',
		});
	};

	const isValidData = () => firstName.isValid && lastName.isValid && bags.isValid && 
		password.isValid && passwordMatch.isValid;

	return (
		<Fragment>
			<Section className={ section } isHeader={ true }>
				<Typography variant="h5">Create New</Typography>
			</Section>
			<Section className={ classnames(formHolder, section) }>
				<form className={ form } action='/createUser/provider' method='post'>
					<BasicInfo />
					<div className={ buttonHolder }>
						<Button 
							disabled={ !(() => isValidData()) }
							onClick={ createNewUser }
							style={{ marginTop: '15px' }}
						>
							Create New
						</Button>
					</div>
				</form>
			</Section>
		</Fragment>);
	
};

const mapStateToProps = state => ({
	createNew: state.createNew,
});
  
const mapDispatchToProps = dispatch => ({
	togglePopup: options => dispatch(togglePopup(options)),
});

CreateNew.propTypes = {
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
				value: PropTypes.number.isRequired,
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
	}),
	togglePopup: PropTypes.func.isRequired,
	addNewUser: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired
};
  
export default compose(
	withStyles(newStyle),
	connect(mapStateToProps, mapDispatchToProps),
	graphql(addNew, { name: 'addNewUser' })
)(CreateNew);
