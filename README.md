# Getting Started with Github Repos

This project is a simple React Application that renders the list of react repositories in a table view. Data is fetched from [GitHub Graphql API v4](https://developer.github.com/v4/) and it has a simple search functionality that autorefresh as the search term is typed/updated.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and dependencies managed with `yarn`.

## Setup
Github API requires a Personal Access Token that can be created following [these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). To set it up create a `.env` file at the root of the project and set `REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN` variable with the Github Personal Access Token as demonstrated at `sample.env` file also at the project's root.

## Available Scripts

In the project directory, you can run the standard Create React App scripts as well as added lint and format:

### `yarn lint` and `yarn lint:fix`

Use these to inspect and fix linting issues using `eslint`.

### `yarn format`

Use this script to format code using `prettier`.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
