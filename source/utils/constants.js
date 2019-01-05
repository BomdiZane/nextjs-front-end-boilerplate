module.exports = {
	passwordRegEx: /(?=.*[!@#$%^&_=+\-*\d])(?=.*[a-z])(?=.*[A-Z]).{8,}/,
	nameRegExp: /[a-zA-Z\s]{2,20}/,
	bagsMax: 5,
	passwordRules: 'password should be at lease 8 characters long, and include at least 1 uppercase letter, 1 lowercase letter and 1 number',
};
