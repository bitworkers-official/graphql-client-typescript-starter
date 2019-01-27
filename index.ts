import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import 'cross-fetch/polyfill' // required polyfill for fetch

// configure the apollo client
const client = new ApolloClient({
  uri: 'https://graphql-typescript-starter.herokuapp.com',
})

async function hello() {
  interface Data {
    hello: string;
  }
  // send a request to the server
  const { data } = await client.query<Data>({
    // this is our query
    query: gql`
      query hello {
        hello
      }
    `,
  })
  console.log(data)
}

hello()
