import React from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import green from "@material-ui/core/colors/green"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0257A2",
    },
    secondary: {
      main: green[400],
    },
  },
})

const GlobalThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default GlobalThemeProvider
