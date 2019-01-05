//#region imports
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const { appInfo: { name, url, description }} = require('../../../credentials');
//#endregion

export default function DynamicHeadElements({ title, isProtected }){
	const openGraphTags = (
		<Fragment>
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={ name } />
			<meta property="og:description" content={ description } />
			<meta property="og:url" content={ url } />
			<meta property="og:site_name" content={ name } />
			<meta property="og:image" content="../static/images/logo.png" />
			<meta name="google-signin-client_id" content="878555846318-p6gkt03i8k8p8i7jj37fp6cv3f5g1e95.apps.googleusercontent.com" />
			<link rel="canonical" href={ url } />
		</Fragment>
	);

	return (
		<Head>
			<title>{ 
				title === 'Home' ? 
					`${ name } - ${ title }` 
					: 
					`${ title } - ${ name }` }
			</title>
			{ 
				isProtected ? 
					<meta name="robots" content="noindex, nofollow" /> 
					: 
					openGraphTags 
			}
		</Head>
	);
}

DynamicHeadElements.propTypes = {
	title: PropTypes.string.isRequired,
	isProtected: PropTypes.bool,
};

DynamicHeadElements.defaultProps = {
	isProtected: false,
};
