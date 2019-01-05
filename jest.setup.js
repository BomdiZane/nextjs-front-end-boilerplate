//#region imports
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import store from './source/state/store';
//#endregion

configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without manually importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.store = store;
