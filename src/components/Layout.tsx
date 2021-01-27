import * as React from "react"
import { useState } from "react"
import { CssBaseline } from "@material-ui/core"
import PropTypes from "prop-types"
import Header from "./Header"
import "@fontsource/roboto"
import GlobalThemeProvider from "../GlobalThemeProvider"

interface Props {
  children: React.ReactNode
  margin: boolean
}

const Layout: React.FC<Props> = ({ children, margin }) => {
  const [addTruck, setAddTruck] = useState(false)

  return (
    <GlobalThemeProvider>
      <CssBaseline>
        <Header
          margin={margin}
          addTruck={() => setAddTruck(!addTruck)}
          addTruckState={addTruck}
        />
        {children}
      </CssBaseline>
    </GlobalThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
