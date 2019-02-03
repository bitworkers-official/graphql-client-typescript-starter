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
