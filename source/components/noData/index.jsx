import noDataStyle from './noDataStyle';

import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const NoData = ({ message }) => <Typography style={ noDataStyle } variant="h5">{ message }</Typography>;

NoData.propTypes = {
	message: PropTypes.string.isRequired,
};
  
export default NoData;
