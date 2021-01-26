import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#e57373",
    },
  },
}))

const LogoutButton = () => {
  const { logout } = useAuth0()
  const classes = useStyles()
  return (
    <Button
      className={classes.root}
      variant="contained"
      size="small"
      onClick={() => logout({ returnTo: `${process.env.AUTH0_LOGOUT}` })}
    >
      Log Out
    </Button>
  )
}

export default LogoutButton
