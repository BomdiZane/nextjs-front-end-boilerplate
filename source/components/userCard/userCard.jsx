//#region imports
import userCardStyle from './userCardStyle';

import PropTypes from 'prop-types';
import { 
	Card, CardActionArea, CardContent, CardMedia, Typography 
} from '@material-ui/core';
//#endregion

const UserCard = ({ provider }) => (
	<Card>
		<CardActionArea>
			<CardMedia
				style={ userCardStyle.cardImage }
				image={ '../../static/images/noPreview.jpeg' }
				title={ `${ provider.lastName }'s profile picture` }
			/>
			<CardContent style={ userCardStyle.cardContent }>
				<Typography gutterBottom variant='h6'>
					{ `${ provider.firstName } ${ provider.lastName }` }
				</Typography>
				<Typography variant='body1' style={{ ...userCardStyle.pWithIcon, ...userCardStyle.location }}>
					<i className='material-icons' style={ userCardStyle.icon }>work</i>
					{ provider.bags }
				</Typography>
			</CardContent>
		</CardActionArea>
	</Card>
);

UserCard.propTypes = {
	provider: PropTypes.shape({
		id: PropTypes.string.isRequired,
		firstName: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
		bags: PropTypes.number.isRequired,
		startedOn: PropTypes.string,
	}),
};

export default UserCard;
