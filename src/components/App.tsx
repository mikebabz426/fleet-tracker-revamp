import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "../components/LoginButton"

const useStyles = makeStyles(theme => ({
  messageBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    marginTop: 100,
    marginBottom: 20,
  },
}))

const App = () => {
  const classes = useStyles()
  const { isLoading, isAuthenticated, error } = useAuth0()

  isLoading ? (
    <Box>
      <Typography>Loading...</Typography>
    </Box>
  ) : null

  error ? (
    <Box>
      <Typography>Error: {error.message}</Typography>
    </Box>
  ) : null

  return (
    <>
      {isAuthenticated ? (
        <Box className={classes.messageBox}>
          <Typography variant="h3" className={classes.message}>
            This is the protected Application Page!
          </Typography>
        </Box>
      ) : (
        <Box className={classes.messageBox}>
          <Typography variant="h3" className={classes.message}>
            To access your account please Log In or Sign Up.
          </Typography>
          <LoginButton />
        </Box>
      )}
    </>
  )
}

export default App
