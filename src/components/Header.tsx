import React from "react"
import { Container, AppBar, Toolbar, Box, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}))

const Header = () => {
  const classes = useStyles()
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <Typography variant="body1">Loading...</Typography>

  return (
    <AppBar>
      <Toolbar className={classes.root}>
        <Container maxWidth="lg" className={classes.navContainer}>
          <Box className={classes.container}>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              <Typography variant="h4">My Fleet Tracker</Typography>
            </Link>
          </Box>
          <Box className={classes.container}>
            {isAuthenticated ? (
              <>
                <Typography>Welcome, {user.name}</Typography>
                {""}
                <LogoutButton />
              </>
            ) : (
              <>
                <Typography>Welcome, Guest</Typography>
                {""}
                <LoginButton />
              </>
            )}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
