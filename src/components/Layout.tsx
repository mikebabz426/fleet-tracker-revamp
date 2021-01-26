import React from "react"
import { CssBaseline } from "@material-ui/core"
import PropTypes from "prop-types"
import Header from "./Header"
import "@fontsource/roboto"
import GlobalThemeProvider from "../GlobalThemeProvider"

const Layout = ({ children }) => {
  return (
    <GlobalThemeProvider>
      <CssBaseline>
        <Header />
        {children}
      </CssBaseline>
    </GlobalThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
