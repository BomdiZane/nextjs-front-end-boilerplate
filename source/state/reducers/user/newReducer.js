const defaultState = {
	newDetails: {
		firstName: {
			value: '',
			isValid: false,
			showErrors: false
		},
		lastName: {
			value: '',
			isValid: false,
			showErrors: false
		},
		bags: {
			value: 0,
			isValid: false,
			showErrors: false
		},
		password: {
			value: '',
			isValid: false,
			showErrors: false
		},
		passwordMatch: {
			value: '',
			isValid: false,
			showErrors: false
		},
	},
	currentStep: 'basicInfo',
	showPassword: false
};

const createNewReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'UPDATE_BAGS':
			state = {
				...state,
				newDetails: {
					...state.newDetails,
					bags: {
						...state.newDetails.bags,
						...action.payload
					}
				}
			};
			break;
		case 'UPDATE_PASSWORD':
			state = {
				...state,
				newDetails: {
					...state.newDetails,
					password: {
						...state.newDetails.password,
						...action.payload
					}
				}
			};
			break;
		case 'UPDATE_PASSWORDMATCH':
			state = {
				...state,
				newDetails: {
					...state.newDetails,
					passwordMatch: {
						...state.newDetails.passwordMatch,
						...action.payload
					}
				}
			};
			break;
		case 'UPDATE_FIRSTNAME':
			state = {
				...state,
				newDetails: {
					...state.newDetails,
					firstName: {
						...state.newDetails.firstName,
						...action.payload
					}
				}
			};
			break;
		case 'UPDATE_LASTNAME':
			state = {
				...state,
				newDetails: {
					...state.newDetails,
					lastName: {
						...state.newDetails.lastName,
						...action.payload
					}
				}
			};
			break;
		case 'TOGGLE_SHOW_PASSWORD':
			state = {
				...state,
				showPassword: !state.showPassword
			};
			break;
	}
	return state;
};

export default createNewReducer;
