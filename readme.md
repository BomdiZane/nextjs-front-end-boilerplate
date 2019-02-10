# Next/React front-end boilerplate

Example setup for a front-end web application with Next/React, Redux, GraphQL (using Apollo Client), Material UI, Docker, Jest

## Start App

This client app relies on a server for data. You can setup your own server, or clone and run my other repo [here](https://github.com/BomdiZane/graphql-api-boilerplate.git) as a server (this is the recommended approach as i do not provide API specifications for setting up your own server that works with this client - I might add that later or simply host the server in the near future, so that no setup is required).

Once you have a server setup and running, you can run the client with following commands.

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
