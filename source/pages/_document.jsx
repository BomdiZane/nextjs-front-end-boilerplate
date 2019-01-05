/** Bob DOM Skeleton
 * 
 * A HOC that wraps the app in a configured HTML structure
 * 
 * @version 1.0.0
 * @created - 2019.01.05
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
 */

import { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import PropTypes from 'prop-types';
const { appInfo: { author, description, keywords }} = require('../../credentials');

class BobDocument extends Document {
	render() {
		const { pageContext } = this.props;

		return (
			<html lang='en' dir='ltr'>
				<Head>
					<meta charSet='utf-8' />
					<meta name='author' content={ author } />
					<meta name='keywords' content={ keywords } />
					<meta name='description' content={ description } />
					<meta name='format-detection' content='telephone=no' />
					<meta 
						name='viewport' 
						content='minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no' 
					/>
					<meta
						name='theme-color'
						content={pageContext ? pageContext.theme.palette.primary.main : null}
					/>
					
					<link rel='stylesheet' type='text/css' href='../static/vendor/css/nprogress.css' />
					<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
				</Head>
				<body>
					<noscript>You need to enable JavaScript to run this app.</noscript>		
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

BobDocument.getInitialProps = ctx => {
	let pageContext, css;

	// Render app and page and get the context of the page with collected side effects.
	const page = ctx.renderPage(Component => {
		const WrappedComponent = props => {
			pageContext = props.pageContext;
			return <Component {...props} />;
		};

		WrappedComponent.propTypes = {
			pageContext: PropTypes.object.isRequired,
		};

		return WrappedComponent;
	});
	
	// It might be undefined, e.g. after an error.
	if (pageContext) css = pageContext.sheetsRegistry.toString();

	return {
		...page,
		pageContext,
		styles: (
			<Fragment>
				<style
					id='jss-server-side'
					dangerouslySetInnerHTML={{ __html: css }} // eslint-disable-line react/no-danger
				/>
				{ flush() || null }
			</Fragment>
		),
	};
};

export default BobDocument;
