/** Bob New Component
 * 
 * This component presents a view to the user for creating an new order
 * 
 * @version 1.0.0
 * @created - 2019.01.05
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
 */

//#region imports
import { Fragment } from 'react';

import DynamicHeadElements from '../components/dynamicHeadElements';
import NewContent from '../components/new';
//#endregion

const New = () => (
	<Fragment>
		<DynamicHeadElements title='New' />
		<NewContent />
	</Fragment>
);
  
export default New;
