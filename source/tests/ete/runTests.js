const { Builder } = require('selenium-webdriver'),
	{ homeTests } = require('./suits/homeTests');

(async function () {
	const WAIT_DURATION = 60000; // 1 minute
	let chromeDriver,
		firefoxDriver,
		edgeDriver;

	try {
		chromeDriver = await new Builder().forBrowser('chrome').build();
		console.log('Starting homeTests with chromeDriver...');
		await homeTests(chromeDriver, WAIT_DURATION);

		firefoxDriver = await new Builder().forBrowser('firefox').build();
		console.log('Starting homeTests with firefoxDriver...');
		await homeTests(firefoxDriver, WAIT_DURATION);

		edgeDriver = await new Builder().forBrowser('MicrosoftEdge').build();
		console.log('Starting homeTests with edgeDriver...');
		await homeTests(edgeDriver, WAIT_DURATION);
	}
	catch(e) { console.error(e); }
	finally {
		if (chromeDriver) await chromeDriver.quit();
		if (firefoxDriver) await firefoxDriver.quit();
		if (edgeDriver) await edgeDriver.quit();
	}
})();
