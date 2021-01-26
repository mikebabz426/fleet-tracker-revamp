import React from "react"
import { Container, AppBar, Toolbar, Box, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"

const useStyles = makeStyles(theme => ({
  appBar: {
    margin: "0",
  },
  typographyStyles: {
    color: "#fff",
  },
  toolbar: {
    justifyContent: "space-between",
    margin: "0 0",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    backgroundColor: "#fff",
    color: "#66bb6a",
    marginLeft: "1rem",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#66bb6a",
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <Typography variant="body1">Loading...</Typography>

  return (
    <AppBar color="primary" position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <Typography variant="h6" className={classes.typographyStyles}>
            My Fleet Tracker
          </Typography>
        </Link>

        <Box className={classes.box}>
          {isAuthenticated ? (
            <>
              <Typography>Welcome, {user.name}</Typography>
              {""}
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
