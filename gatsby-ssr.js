/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// // You can delete this file if you're not using it
import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import { FilterProvider } from "./src/FilterContext"
import { NewTruckProvider } from "./src/NewTruckContext"

export const wrapRootElement = ({ element }) => {
  return (
    <FilterProvider>
      <NewTruckProvider>
        <Auth0Provider
          domain={`${process.env.AUTH0_DOMAIN}`}
          clientId={`${process.env.AUTH0_CLIENTID}`}
          redirectUri={`${process.env.AUTH0_CALLBACK}`}
        >
          {element}
        </Auth0Provider>
      </NewTruckProvider>
    </FilterProvider>
  )
}
