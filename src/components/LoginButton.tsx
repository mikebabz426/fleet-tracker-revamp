import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem",
  },
}))

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  )
}

export default LoginButton
