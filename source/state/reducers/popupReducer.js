const defaultState = {
	open: false,
	variant: 'info',
	message: 'Welcome :)',
};

const popupReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'TOGGLE_POPUP':
			state = {
				...state,
				...action.payload
			};
			break;
	}
	return state;
};

export default popupReducer;
