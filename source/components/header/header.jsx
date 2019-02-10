//#region imports
import headerStyle from './headerStyle';
import footerStyle from '../footer/footerStyle';

import Link from 'next/link';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

const pageURL = require('../../utils/pageURL');
//#endregion

const Header = ({ classes }) => (
	<AppBar className={ classes.appBar }>
		<Toolbar>
			<Link href={ pageURL.home.url } as={ pageURL.home.as } prefetch passHref>
				<Typography className={ classes.title } variant="h5" color="inherit" noWrap>
					App Name
				</Typography>
			</Link>
			<div className={ classes.grow } />
			<div style={ footerStyle.linkHolder }>
				<Link href={ pageURL.new.url } as={ pageURL.new.as }>
					<a style={ footerStyle.link }>
						<Typography 
							variant="body1" 
							style={{
								...footerStyle.linkText,
								color: 'white'
							}}
						>Create User</Typography>
					</a>
				</Link>
			</div>
		</Toolbar>
	</AppBar>
);

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(Header);
