[![travis build](https://img.shields.io/travis/bitworkers-official/graphql-client-typescript-starter.svg?style=flat-square)](https://travis-ci.org/bitworkers-official/graphql-client-typescript-starter) ![renovate](https://badges.renovateapi.com/github/bitworkers-official/graphql-client-typescript-starter)

# GraphQL Client TypeScript Starter

> Starter template for a GraphQL & TypeScript client

## Quickstart 🚀

```bash
git clone https://github.com/bitworkers-official/graphql-client-typescript-starter &&
cd graphql-client-typescript-starter &&
npm install &&
npm run dev
```

## Code

```ts
// api/index.ts
import { query } from './client'

async function hello() {
  interface Data {
    hello: string
  }

  // send a request to the server
  const { data } = await query<Data>/* graphql */ `
    query hello {
      hello
    }
  `

  console.log(data)
}

hello()
```

<!-- ## ESLint

When you have updated the schema of the server, you also need to update the schema of the client (for ESLint to work properly).

```bash
npm run update-schema
```

This updates schema.graphql in the client folder and you can continue to enjoy ESLint catching your errors 😄 -->

## Debugging (in Visual Studio Code)

Press the green play icon in the debugging pane

## GraphQL Server Typescript Starter

For an accompanying GraphQL server template see https://github.com/bitworkers-official/graphql-server-typescript-starter.
