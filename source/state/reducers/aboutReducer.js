const defaultState = {
	expandedPanel: 'generalPanel',
};

const processingReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'UPDATE_EXPANDED_PANEL':
			state = {
				...state,
				expandedPanel: action.payload === state.expandedPanel ? false : action.payload
			};
			break;
	}
	return state;
};

export default processingReducer;
