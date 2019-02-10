/** Root Component
 * 
 * A HOC that wraps sub-components with a Redux store, Apollo provider and a Material UI Provider
 * This class also provides the basic structure of the application and sets up global 
 * error handling and initialization
 * 
 * @version 1.0.0
 * @created - 2019.01.05
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
 */

//#region imports
import { AppRoot } from '../style/template';
import { defaultRadius } from '../style/variables';

// import { StrictMode } from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import JssProvider from 'react-jss/lib/JssProvider';
import fetch from 'cross-fetch';
import NProgress from 'nprogress';
import { CssBaseline, MuiThemeProvider, createGenerateClassName, withStyles } from '@material-ui/core';
import { SheetsRegistry } from 'jss';
import PropTypes from 'prop-types';

import store from '../state/store';

import Header from '../components/header/header';
import Body from '../components/body/body';
import Social from '../components/social/social';
import Popup from '../components/popup';
import theme from '../style/theme';

const { appInfo: { apiURL } } = require('../../credentials');
//#endregion

let pageContext;
const client = new ApolloClient({
	uri: apiURL,
	fetch: fetch
});

Router.events.on('routeChangeStart', url => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {

	constructor() {
		super();
		this.pageContext = getPageContext();
	}

	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);

		return { pageProps };
	}

	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');

		if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
	}

	componentDidCatch(error, errorStack) {
		console.error(error, errorStack);
		super.componentDidCatch(error, errorStack);
	}

	render() {
		const { Component, pageProps, classes: { root } } = this.props;

		return (
			<Container>
				<JssProvider
					registry={this.pageContext.sheetsRegistry}
					generateClassName={this.pageContext.generateClassName}
				>
					<MuiThemeProvider
						theme={theme}
						sheetsManager={this.pageContext.sheetsManager}
					>
						<Provider store={store}>
							<ApolloProvider client={client}>
								{/* <StrictMode> */}
								<CssBaseline />
								<div className={root}>
									<Header />
									<Social />
									<Popup />
									<Body>
										<Component pageContext={this.pageContext} {...pageProps} />
									</Body>
								</div>
								{/* </StrictMode> */}
								<style jsx global>
									{`
										*::-webkit-scrollbar{
											width: 10px;
											height: 5px;
											background-color: #b5b5b7;
										}
										*::-webkit-scrollbar-track{
											-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
											box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
										}
										*::-webkit-scrollbar-thumb{
											border-radius: ${ defaultRadius };
											background-color: #eee;
										}
										*{
											box-sizing: border-box;
											transition: all 0.1s ease-out;
											outline: none;
											border: none;
										}
										p{
											cursor: default;
											margin: 0;
										}
									`}
								</style>
							</ApolloProvider>
						</Provider>
					</MuiThemeProvider>
				</JssProvider>
			</Container>
		);
	}
}

MyApp.propTypes = {
	classes: PropTypes.object.isRequired,
};

function getPageContext() {
	// Make sure to create a new context for every server-side request so that data
	// isn't shared between connections (which would be bad).
	if (!process.browser) return createPageContext();

	// Reuse context on the client-side.
	if (!pageContext) pageContext = createPageContext();

	return pageContext;
}

function createPageContext() {
	return {
		theme,
		// This is needed in order to deduplicate the injection of CSS in the page.
		sheetsManager: new Map(),
		// This is needed in order to inject the critical CSS.
		sheetsRegistry: new SheetsRegistry(),
		// The standard class name generator.
		generateClassName: createGenerateClassName(),
	};
}

export default withStyles(AppRoot)(MyApp);
