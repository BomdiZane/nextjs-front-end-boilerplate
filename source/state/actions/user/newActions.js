export function updateBags(options) {
	return {
		type: 'UPDATE_BAGS',
		payload: options
	};
}

export function updatePassword(options) {
	return {
		type: 'UPDATE_PASSWORD',
		payload: options
	};
}

export function updatePasswordmatch(options) {
	return {
		type: 'UPDATE_PASSWORDMATCH',
		payload: options
	};
}

export function updateFirstName(options) {
	return {
		type: 'UPDATE_FIRSTNAME',
		payload: options
	};
}

export function updateLastName(options) {
	return {
		type: 'UPDATE_LASTNAME',
		payload: options
	};
}

export function toggleShowPassword() {
	return { type: 'TOGGLE_SHOW_PASSWORD' };
}
