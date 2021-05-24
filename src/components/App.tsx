import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "../components/LoginButton"
import Main from "../components/Main"

interface Props {
  children?: React.ReactNode
}

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

const App: React.FC<Props> = ({}) => {
  const classes = useStyles()
  const { isLoading, isAuthenticated, error, user } = useAuth0()

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
        <Main />
      ) : (
        <Box className={classes.messageBox}>
          <Typography variant="h6" className={classes.message}>
            Please log in to access the application!
          </Typography>
          <LoginButton />
        </Box>
      )}
    </>
  )
}

export default App
