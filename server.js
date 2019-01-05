const express = require('express'),
	next = require('next'),
	app = next({
		dev: process.env.NODE_ENV !== 'production',
		dir: './source',
	}),
	handle = app.getRequestHandler();

app.prepare()
	.then(() => {

		const server = express(),
			helmet = require('helmet'),
			{ port, appInfo: { name } } = require('./credentials');

		server.use(helmet()); // Some header security

		server.get('*', (req, res) => handle(req, res)); // Let handle all other page routes

		server.listen(port, err => err ? console.error(err) : console.log(`Serving ${ name } on port ${ port }`));
	})
	.catch(e => {
		console.error(e.stack);
		process.exit(1);
	});
