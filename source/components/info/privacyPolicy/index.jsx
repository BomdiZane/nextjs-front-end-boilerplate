//#region imports
import { paperStyles } from '../../../style/template';

import PropTypes from 'prop-types';
import { Typography, Paper, withStyles } from '@material-ui/core';

import Section from '../../section/section';
//#endregion

const PrivacyPolicy = ({ classes: { root }}) => (
	<Section>
		<Paper className={ root } style={{ padding: 0 }} elevation={ 1 }>
			<Section>
				<Typography variant="h5">Privacy Policy</Typography>
			</Section>
			<Section>
				<Typography variant='body1'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolore rem laboriosam cum maiores, quidem praesentium temporibus sed eligendi doloremque et molestiae eos, minima excepturi. Rerum reprehenderit in expedita harum.
				</Typography>
			</Section>
			<Section>
				<Typography variant='body1'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolore rem laboriosam cum maiores, quidem praesentium temporibus sed eligendi doloremque et molestiae eos, minima excepturi. Rerum reprehenderit in expedita harum.
				</Typography>
			</Section>
			<Section>
				<Typography variant='body1'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolore rem laboriosam cum maiores, quidem praesentium temporibus sed eligendi doloremque et molestiae eos, minima excepturi. Rerum reprehenderit in expedita harum.
				</Typography>
			</Section>
		</Paper>
	</Section>
);

PrivacyPolicy.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(paperStyles, {
	name: 'PrivacyPolicy',
	withTheme: true
})(PrivacyPolicy);
