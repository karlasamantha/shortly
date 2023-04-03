# Shortly

This is a basic URL shortener client, bootstrapped using the Typescript template from CRA(create-react-app) and uses the [shrtco](https://shrtco.de/docs) API.

## Running Locally

Use the following commands to run this web app locally:

```
  git clone https://github.com/karlasamantha/shortly.git
  cd shortly
  npm i
  npm start
```

## Running the tests

To run the test suite use the following commands inside the root directory:

```
  npm run test
```

> This will run the test suite in watch mode, to quit this press `q` in the terminal

## Biggest challenges

The most challenging part during this exercise was type guarding the API response. Mostly due to unfamiliarity with the current best practices for union types and getting the proper type for each scenario.

## What would change in a larger scale app

- Data fetching: one approach could be extracting the `handleSubmit` function into a reusable custom hook, that would return just the necessary states for data and error handling. Another approach could be using a third-party library such as [SWR](https://swr.vercel.app/) that offers a lot more options for data handling, such as caching and SSR support;

- Styling: using a component library to standardize styling practices. [ChakraUI](https://chakra-ui.com/), [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/), or a CSS framework like [TailwindCSS](https://tailwindcss.com/) are good examples of modern styling approaches. However, this could also add time to learn and customize the chosen library.

- Component reusability: `App` is the main component in this application, and it is tightly coupled with its states. In a larger app, `App` could serve as a main container, and render smaller components dynamically, and each component would handle its necessary states. For example, the `input` could become a reusable `Input` component.
