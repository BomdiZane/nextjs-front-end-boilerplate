module.exports = {
	home: {
		url: '/index',
		as: '/',
	},
	new: {
		url: '/new',
		as: '/new',
	},
	about: {
		url: '/info?section=about',
		as: '/info/about',
		page: '/info',
		queryParams: {
			section: 'about'
		}
	},
	support: {
		url: '/info?section=support',
		as: '/info/support',
		page: '/info',
		queryParams: {
			section: 'support'
		}
	},
	passwordReset: {
		url: '/info?section=support',
		as: '/support/passwordReset',
		page: '/info',
		queryParams: {
			section: 'passwordReset'
		}
	},
	termsOfService: {
		url: '/info?section=termsOfService',
		as: '/info/termsOfService',
		page: '/info',
		queryParams: {
			section: 'termsOfService'
		}
	},
	privacyPolicy: {
		url: '/info?section=privacyPolicy',
		as: '/info/privacyPolicy',
		page: '/info',
		queryParams: {
			section: 'privacyPolicy'
		}
	},
};
