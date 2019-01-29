import { query } from './client'

async function hello() {
  interface Data {
    hello: string
  }

  // send a request to the server
  const { data } = await query<Data>`
    query hello {
      hello
    }
  `

  console.log(data)
}

hello()
