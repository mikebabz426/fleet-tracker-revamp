import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import App from "../components/App"

const useStyles = makeStyles(theme => ({
  container: {
    minWidth: "100%",
  },
}))

const AppPage = () => {
  const classes = useStyles()
  return (
    <>
      <Layout margin>
        <Container className={classes.container}>
          <SEO title="Home" />
          <App />
        </Container>
      </Layout>
    </>
  )
}

export default AppPage
