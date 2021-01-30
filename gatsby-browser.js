/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import { FilterProvider } from "./src/FilterContext"
import { NewTruckProvider } from "./src/NewTruckContext"
import { DistroProvider } from "./src/DistroContext"

export const wrapRootElement = ({ element }) => {
  return (
    <FilterProvider>
      <NewTruckProvider>
        <DistroProvider>
          <Auth0Provider
            domain={`${process.env.AUTH0_DOMAIN}`}
            clientId={`${process.env.AUTH0_CLIENTID}`}
            redirectUri={`${process.env.AUTH0_CALLBACK}`}
          >
            {element}
          </Auth0Provider>
        </DistroProvider>
      </NewTruckProvider>
    </FilterProvider>
  )
}
