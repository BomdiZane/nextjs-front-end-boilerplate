const defaultState = {
	isProfileMenuOpen: false,
};

const headerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'TOGGLE_PROFILE_MENU':
			state = {
				...state,
				isProfileMenuOpen: !state.isProfileMenuOpen
			};
			break;
	}
	return state;
};

export default headerReducer;
