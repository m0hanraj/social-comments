# TDD with React Testing library

This repo contains a sample code for [TDD with React Testing Library](https://www.mohanraj.dev/blogs/tdd-with-react-testing-library-component-testing) blog.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode and runs the tests that are set up using React Testing Library.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Static API

The project uses static API to simulate the remote API back-end. I have used `json-server` to fake the API's and it reads data from `db.json`.

To run this service you need to install json-server using

### `npm install -g json-server`

Run below command from this repo to start the service

### `json-server -p 4000 --watch db.json`
