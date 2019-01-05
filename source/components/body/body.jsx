//#region imports
import bodyStyle from './bodyStyle';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import Footer from '../footer/footer';
//#endregion

const Body = ({ 
	children, 
	classes,
}) => (
	<main className={ classes.content }>
		{ children }
		<Footer />
	</main>
);

Body.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.object.isRequired,
};

export default withStyles(bodyStyle)(Body);
