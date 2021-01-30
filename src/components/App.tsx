import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "../components/LoginButton"
import Main from "../components/Main"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

interface Props {
  children?: React.ReactNode
}

const client = new ApolloClient({
  uri: "https://bright-sawfish-99.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
})

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

  console.log(user)

  return (
    <ApolloProvider client={client}>
      {isAuthenticated && user.email === "ops@speedfreightinc.com" ? (
        <Main />
      ) : (
        <Box className={classes.messageBox}>
          <Typography variant="h3" className={classes.message}>
            To access your account please Log In or Sign Up.
          </Typography>
          <LoginButton />
        </Box>
      )}
    </ApolloProvider>
  )
}

export default App
