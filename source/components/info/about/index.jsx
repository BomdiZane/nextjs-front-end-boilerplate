//#region imports
import templateStyle from '../../../style/template';

import { Fragment } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
	ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Grid, withStyles 
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import Section from '../../section/section';
import { updateExpandedPanel } from '../../../state/actions/aboutActions';
//#endregion

const About = ({
	about: { expandedPanel }, 
	updateExpandedPanel,
	classes: { accordion: { root }} 
}) => (
	<Fragment>
		<Section>
			<Typography variant="h5">About</Typography>
		</Section>
		<Section>
			<div style={ root }>
				<ExpansionPanel expanded={expandedPanel === 'generalPanel' } onChange={ () => updateExpandedPanel('generalPanel') }>
					<ExpansionPanelSummary expandIcon={ <ExpandMore /> }>
						<Typography variant="subtitle1">General</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container direction="row" justify="space-between" alignItems="flex-start">
							<Grid item xs={ 12 } md={ 4 }>
								<Typography variant='body1'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolore rem laboriosam cum maiores, quidem praesentium temporibus sed eligendi doloremque et molestiae eos, minima excepturi. Rerum reprehenderit in expedita harum.
								</Typography>
							</Grid>
							<Grid item xs={ 12 } md={ 4 }>
								<Typography variant='body1'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolore rem laboriosam cum maiores, quidem praesentium temporibus sed eligendi doloremque et molestiae eos, minima excepturi. Rerum reprehenderit in expedita harum.
								</Typography>
							</Grid>
							<Grid item xs={ 12 } md={ 4 }>
								<Typography variant='body1'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolore rem laboriosam cum maiores, quidem praesentium temporibus sed eligendi doloremque et molestiae eos, minima excepturi. Rerum reprehenderit in expedita harum.
								</Typography>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel expanded={ expandedPanel === 'teamPanel' } onChange={ () => updateExpandedPanel('teamPanel') }>
					<ExpansionPanelSummary expandIcon={ <ExpandMore /> }>
						<Typography variant="subtitle1">Team</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography variant='body1'>
							Adombang Munang Mbomndih A.K.A Bomdi
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel expanded={ expandedPanel === 'contactsPanel'} onChange={ () => updateExpandedPanel('contactsPanel') }>
					<ExpansionPanelSummary expandIcon={ <ExpandMore /> }>
						<Typography variant="subtitle1">Contacts</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography variant='body1'>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
							eros, vitae egestas augue. Duis vel est augue.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		</Section>
	</Fragment>
);

const mapStateToProps = state => ({
	about: state.about,
});

const mapDispatchToProps = dispatch => ({
	updateExpandedPanel: panel => dispatch(updateExpandedPanel(panel)),
});

About.propTypes = {
	updateExpandedPanel: PropTypes.func.isRequired,
	about: PropTypes.shape({
		expandedPanel: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.bool,
		]),
	}),
	classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(templateStyle, {
		name: 'About',
		withTheme: true
	}),
	connect(mapStateToProps, mapDispatchToProps),
)(About);
