# React Frontend for a OMDB Movie Search App

A client side react web app to search movies from OMDB API (https://www.omdbapi.com/). It consists of a React.js webapp (this repository)

## Requirements

For development, you will only need Node.js and a node global package, yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.

- #### Node installation on Ubuntu

  You can install nodejs and yarn easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install yarn

If the installation was successful, you should be able to run the following command.

    $ node --version
    v17.2.0

    $ yarn --version
    1.22.10

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Install

    $ git clone https://github.com/mkappworks/omdbapi-react-app.git
    $ cd omdbapi-react-app
    $ yarn install

## Environment Variables

Add a .env file in the root directory and set the following environment variables:

    $ REACT_APP_OMDB_API_KEY : api key of OMDB

## Project Structure

The folder structure of this app is explained below:

| Name               | Description                                      |
| ------------------ | ------------------------------------------------ |
| **node_modules**   | Contains all project packages dependencies       |
| **src**            | Contains source code that will be compiled       |
| **src/components** | Contains all the css styled components           |
| **src/containers** | Contains all the React Components                |
| **src/hooks**      | Contains all Custom hooks                        |
| **src/services**   | Contains all http service                    |
| **src/test**       | Contains all tests                           |
| **src/types**      | Contains all the project types/inferfaces        |
| **src/utils**      | Contains all the local util helper functions     |
| **package.json**   | Contains dependencies as well as [build scripts] |
