/** iServe Section HOC
 * 
 * This is a HOC that wraps subcomponents and presents them as styled 'section' views 
 * that take up an entire row of a page
 * 
 * @version 1.0.0
 * @created - 2018.12.31
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
 */

//#region imports
import sectionStyle from './sectionStyle';

import withStyles from '@material-ui/core/styles/withStyles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
//#endregion

const Section = ({ 
	children, 
	customStyle, 
	className, 
	classes: { root, header }, 
	isHeader
}) => 
	<section 
		style={ customStyle } 
		className={ classnames(root, className, { [header]: isHeader }) }
	>
		{ children }
	</section>;

Section.propTypes = {
	children: PropTypes.node,
	customStyle: PropTypes.object,
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
	isHeader: PropTypes.bool
};

Section.defaultProps = {
	children: '',
	customStyle: {},
	className: '',
	isHeader: false
};

export default withStyles(sectionStyle)(Section);
