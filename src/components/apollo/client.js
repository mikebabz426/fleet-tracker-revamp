import fetch from "isomorphic-fetch"
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.HASURA_GRAPHQL_URI}`,
    fetch,
  }),
  cache: new InMemoryCache(),
})
