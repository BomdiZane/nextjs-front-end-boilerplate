//#region imports
import sectionCardStyle from './sectionCardStyle';

import Link from 'next/link';
import PropTypes from 'prop-types';
import { 
	Card, CardActionArea, CardContent, CardMedia, Typography 
} from '@material-ui/core';
//#endregion

const SectionCard = ({ info: { href, as, name, description, image }}) => (
	<Link href={ href } as={ as } prefetch passHref>
		<Card>
			<CardActionArea>
				<Typography variant='h6' style={ sectionCardStyle.sectionName }>{ name }</Typography>
				<CardMedia
					style={ sectionCardStyle.cardImage }
					image={ `../../static/images/${ image }` }
					title={ `${ name }'s background image` }
				/>
				<CardContent>
					<Typography variant='body1'>{ description }</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	</Link>
);

SectionCard.propTypes = {
	info: PropTypes.shape({
		href: PropTypes.string.isRequired,
		as: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
	}),
};

export default SectionCard;
