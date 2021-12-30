# Workday Test

The app uses the Github GraphQL API. [An authorization token is required from Github](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to make requests. Add the token to a .env file at the top level of the folder using the following variable.

`REACT_APP_GITHUB_TOKEN=your_token_here`

## Running the App
1. `npm install`
2. `npm start`

## Simplified Assumptions

- Very few tests were written because of time constraints. With more time I would make sure more tests are written before considering moving to production. I am cycling through interview coding challenges right now and don't have time to add more. If more examples are needed we use Jest at work and I can show live examples.

- No theming/styling is used. Most styling is done through inline styles or Material UI defaults.

- Accessibility is omitted for sake of time as well.



