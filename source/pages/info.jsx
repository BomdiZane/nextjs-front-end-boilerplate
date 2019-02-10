/** Info Component
 * 
 * This component dynamically presents information views to the user as requested
 * 
 * @version 1.0.0
 * @created - 2019.01.05
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
 */

//#region imports
import { Fragment } from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import DynamicHeadElements from '../components/dynamicHeadElements';
import About from '../components/info/about';
import TermsOfService from '../components/info/termsOfService';
import PrivacyPolicy from '../components/info/privacyPolicy';
//#endregion

const Info = ({ router: { query: { section }}}) => {
	let currentSection;
	
	switch (section) {
		case 'termsOfService': currentSection = <TermsOfService />; break;
		case 'privacyPolicy': currentSection = <PrivacyPolicy />; break;
		default: currentSection = <About />; break;
	}

	return (
		<Fragment>
			<DynamicHeadElements title='Info' />
			{ currentSection }
		</Fragment>
	);
};

Info.propTypes = {
	router: PropTypes.shape({
		query: PropTypes.shape({
			section: PropTypes.string.isRequired
		})
	})
};
  
export default withRouter(Info);
