//#region imports
import socialStyle from './socialStyle';

import { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Tooltip, Fab, withStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import socialAccounts from '../../utils/socialAccounts';
//#endregion

class Social extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){ window.addEventListener('click', this.handleHover); }
	componentWillUnmount(){ window.removeEventListener('click', this.handleHover); }

	handleHover(event){
		document.getElementById('iconHolder').style.display = (event.target.classList.contains('show') || event.target.parentNode.classList.contains('show')) ? 'flex' : 'none';
	}

	render(){
		const { holder, iconHolder, fab, icon, link } = this.props.classes;

		return (
			<div className={ classnames(holder, 'show') }>
				<div className={ iconHolder } id='iconHolder'>
					<Tooltip title='Github' placement="left">
						<a href={ socialAccounts.github }  target='_blank' rel='noopener noreferrer' className={ link }>
							<img src="../../static/images/github.png" alt="github icon" className={ icon } />
						</a>
					</Tooltip>
					<Tooltip title='Email' placement="left">
						<a href={`mailto:${ socialAccounts.email }`} className={ link }>
							<img src="../../static/images/email.png" alt="email icon" className={ icon } />
						</a>
					</Tooltip>
					<Tooltip title='Call' placement="left">
						<a href={`tel:${ socialAccounts.mobile }`} className={ link }>
							<img src="../../static/images/phone.png" alt="phone icon" className={ icon } />
						</a>
					</Tooltip>
				</div>
				<Fab color="primary" aria-label="Add" className={ classnames(fab, 'show') }>
					<Add className='show' />
				</Fab>
			</div>
		);
	}
}  

Social.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(socialStyle, {
	name: 'Social',
	withTheme: true
})(Social);
