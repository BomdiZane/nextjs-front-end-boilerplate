const defaultState = {
	language: {
		text: 'English',
		iconSrc: '../../../static/images/english.jpg'
	},
	activeAccordion: 'welcome',
	helpMenuAnchor: '',
	languageMenuAnchor: '',
	profileMenuAnchor: '',
	helpMenuIsOpen: false,
	languageMenuIsOpen: false,
	profileMenuIsOpen: false
};

const mainReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'CHANGE_LANGUAGE':
			state = {
				...state,
				language: action.payload
			};
			break;
		case 'UPDATE_MENU_ANCHOR':
			state = {
				...state,
				[action.payload.menu]: action.payload.anchor
			};
			break;
		case 'TOGGLE_SUB_MENU':
			state = {
				...state,
				[action.payload]: !state[action.payload]
			};
			break;
		case 'UPDATE_ACCORDION':
			state = {
				...state,
				activeAccordion: action.payload === state.activeAccordion ? false : action.payload
			};
			break;
	}
	return state;
};

export default mainReducer;
