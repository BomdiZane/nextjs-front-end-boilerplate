# BOB test APP

Test APP for BOB

## Run App

```javaScript
//WITH NPM
// Install dependencies
npm i

// Start server
npm start

//WITH DOCKER
docker-compose up
```

## Run Tests

Add appropriate selenium webdriver to your PATH before running end-to-end tests. Executables for windows are included in the 'webdrivers' folder (for chrome and firefox). Simply add that folder to your PATH if you are on windows. if you use a mac or linux (or use a different browser), you can get versions for your machine/browser [here](https://www.npmjs.com/package/selenium-webdriver)

To allow selenium take control of your chrome browser make sure you have this key on your registry: Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\MachineLevelUserCloudPolicyEnrollmentToken. If you need help adding this key see [this guide](https://github.com/SeleniumHQ/selenium/issues/5966#issuecomment-398200932)

```javaScript
// Unit/Component tests
npm t

// Test coverage for Unit/Component test
npm run test:coverage

// End-to-end tests (with Selenium)
npm run dev // If the server isn't running already
npm run test:ete
```

### Author

Adombang Munang (Bomdi)
