import React from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#78909C",
    },
    secondary: {
      main: "#4b636e",
    },
  },
})

const GlobalThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default GlobalThemeProvider
