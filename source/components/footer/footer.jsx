//#region imports
import footerStyle from './footerStyle';

import Link from 'next/link';
import { IconButton, Avatar, Tooltip, Typography } from '@material-ui/core';

const pageURL = require('../../utils/pageURL');
//#endregion

const Footer = () => {
	const currentYear = new Date().getFullYear(),
		scrollToTop = () => window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});

	return (
		<footer style={ footerStyle.pageFooter }>			
			<Tooltip title='Scroll to top' placement="right">
				<IconButton style={ footerStyle.logo } onClick={ scrollToTop }>
					<Avatar
						alt='logo'
						src={'../../static/images/logo.png'}
					/>
				</IconButton>
			</Tooltip>
			<div style={ footerStyle.linkHolder }>
				<Link href={ pageURL.about.url } as={ pageURL.about.as }>
					<a style={ footerStyle.link }>
						<Typography variant="body1" style={ footerStyle.linkText }>About</Typography>
					</a>
				</Link>
				<Link href={ pageURL.termsOfService.url } as={ pageURL.termsOfService.as }>
					<a style={ footerStyle.link }>
						<Typography variant="body1" style={ footerStyle.linkText }>Terms</Typography>
					</a>
				</Link>
				<Link href={ pageURL.privacyPolicy.url } as={ pageURL.privacyPolicy.as }>
					<a style={ footerStyle.link }>
						<Typography variant="body1" style={ footerStyle.linkText }>Privacy</Typography>
					</a>
				</Link>
			</div>
			<Typography variant="body1">&copy; {currentYear === 2018 ? currentYear : `2018 - ${currentYear}`}</Typography>
		</footer>
	);
};

export default Footer;
