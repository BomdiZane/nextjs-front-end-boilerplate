/** Bob Home Page
 * 
 * This component serves as the UI entry point to the application
 * 
 * @version 1.0.0
 * @created - 2019.01.05
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
 */

//#region imports
import { Fragment } from 'react';

import DynamicHeadElements from '../components/dynamicHeadElements';
//#endregion

const Home = () => (
	<Fragment>
		<DynamicHeadElements title='Home' />
		<h1>It works</h1>
	</Fragment>
);
  
export default Home;
