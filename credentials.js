const env = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
let config = {},
	appInfo = {
		name: 'nextjs-front-end-boilerplate',
		description: 'Example setup for a front-end web application with Next/React, Redux, GraphQL (using Apollo Client), Material UI, Docker, Jest',
		keywords: 'Next, React, Redux, GraphQL, Material UI, Docker, Jest',
		apiURL: 'http://localhost:3001/api',
		author: 'Adombang Munang Mbomndih <dzedock@yahoo.com> (https://bomdisoft.com)',
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
