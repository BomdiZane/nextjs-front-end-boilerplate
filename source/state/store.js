import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import home from './reducers/home/homeReducer';
import header from './reducers/home/headerReducer';
import createNew from './reducers/user/newReducer';
import about from './reducers/aboutReducer';
import popup from './reducers/popupReducer';

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
	combineReducers({ home, header, popup, about, createNew }),
	{},
	composeEnhancers(
		applyMiddleware(thunk),
	)
);
