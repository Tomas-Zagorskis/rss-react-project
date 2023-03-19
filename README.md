# RSS React Project

This is a private project with the name "rss-react-project". It is a web application built with React and TypeScript that utilizes Vite as the development server and build tool. The project also includes Husky and lint-staged for code formatting and linting.

## Prerequisites

Before running the application, ensure that you have the following software installed on your machine:

- Node.js (v16 or higher)
- NPM (v7 or higher)

## Installation

To install the project dependencies, run the following command in your terminal:

`npm install`

## Usage

The project includes several scripts in the `package.json` file that can be used to develop, build, and test the application. Here are the available scripts:

- `dev`: Starts the development server with Vite.
- `build`: Builds the application using TypeScript and Vite.
- `preview`: Builds and previews the application.
- `lint`: Runs ESLint to check for code quality and formatting errors.
- `format`: Formats the code using Prettier.
- `test`: Runs the tests for the application.
- `coverage`: Generates a code coverage report for the tests.

## Husky and lint-staged

This project includes Husky and lint-staged to ensure that the code is formatted correctly and follows best practices. The `pre-commit` hook is set up to run `lint-staged`, which in turn runs Prettier to format the staged files before committing.
