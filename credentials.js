const env = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
let config = {},
	appInfo = {
		name: 'bob-app',
		description: 'Test app for bob user data',
		keywords: 'bob, baggage, travel',
		apiURL: 'http://localhost:3001/api',
		author: 'Bomdi Munang <dzedock@yahoo.com> (https://bomdisoft.com)',
	};

config.development = {
	envName : 'development',
	port: process.env.PORT || 3000,
	appInfo: appInfo,
};

config.test = {
	envName : 'test',
	port: process.env.PORT || 3000,
	appInfo: appInfo,
};

config.production = {
	envName : 'production',
	port: process.env.PORT || 3000,
	appInfo: appInfo,
};

module.exports = typeof(config[env]) === 'object' ? config[env] : config.development;
