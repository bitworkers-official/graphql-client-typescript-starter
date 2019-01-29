import ApolloClient from 'apollo-boost'
import graphqlTag from 'graphql-tag'
import 'cross-fetch/polyfill' // required polyfill for fetch

// configure the apollo client
const apolloClient = new ApolloClient({
  uri: 'https://graphql-server-typescript.herokuapp.com',
})

/**
 * the response type of a successful graphql query
 */
interface GraphQLSuccessResponse<T> {
  data: T
}

/**
 * Performs a graphql query. If it is not successful (e.g. status code 400), an error is thrown.
 */
export async function query<T = any>(
  strings: TemplateStringsArray,
  ...values: string[]
): Promise<GraphQLSuccessResponse<T>> {
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
