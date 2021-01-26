import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import App from "../components/App"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
}))

const AppPage = () => {
  const classes = useStyles()

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Container maxWidth="lg" className={classes.root}>
          <App />
        </Container>
      </Layout>
    </>
  )
}

export default AppPage
