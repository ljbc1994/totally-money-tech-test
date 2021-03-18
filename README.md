# Totally Money Tech Test

## Setup

### Install and run the project

```bash
npm i && npm start
```

-   Installs npm dependencies
-   Builds the project in production mode
-   Starts the server at `http://localhost:3000`

## Tests

-   Unit tests
-   Integration tests

```bash
npm test
```

- E2E tests

```bash
npm run test:all
```

## Requirements

### Ability to add new cards

1. Update the new card type to `CardType` in `shared\constants\card.ts`.
2. Add a new rule for the card type in `shared\RuleEngine\rules` by extending a `Rule`.
3. Export the new rule in `index.ts`, tying the `CardType` to the rule id.
4. Add a card with the card type in `server\store\cards.ts`.
5. Add a test case for the new rule!

## Using

### Front End

-   React (SSR), React Router, TypeScript, Styled Components, Formik

### Back End

-   Node, TypeScript

### Build System

-   Custom Webpack implementation

### Testing

-   Jest (TS)
-   Superagent
-   Cypress
