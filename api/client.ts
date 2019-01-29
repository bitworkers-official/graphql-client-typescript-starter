import ApolloClient from 'apollo-boost'
import graphqlTag from 'graphql-tag'
import 'cross-fetch/polyfill' // required polyfill for fetch

// configure the apollo client
const apolloClient = new ApolloClient({
  uri: 'https://graphql-server-typescript.herokuapp.com',
})

interface GraphQLResponse<T> {
  data: T
  error?: any
}

export async function gql<T = any>(
  strings,
  ...values
): Promise<GraphQLResponse<T>> {
  // reconstruct the original string
  const originalString = strings.reduce(
    (total, current, index) => `${total}${current}${values[index] || ''}`,
    ``
  )
  // make the query
  return apolloClient.query<T>({
    query: graphqlTag`${originalString}`,
  })
}

async function hello() {
  interface Data {
    hello: string
  }
  // send a request to the server
  const { data } = await gql<Data>`
    query hello {
      hello
    }
  `

  console.log(data)
}

hello()
