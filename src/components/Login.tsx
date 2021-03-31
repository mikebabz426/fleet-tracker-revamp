import React from "react"
import { Typography, Box, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import LoginButton from "./LoginButton"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    height: "89vh",
    width: "100vw",
    margin: 0,
    alignItems: "center",
    justifyContent: "space-center",
  },
  subheading: {
    width: 400,
    margin: "2rem 5rem",
    fontWeight: 300,
    textAlign: "center",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100vh",
    width: "50vw",
    borderRadius: "50% 0 0 50%",
  },
}))

const Login = () => {
  const data = useStaticQuery(graphql`
    {
      volvo: file(relativePath: { eq: "volvo.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const volvo = data.volvo.childImageSharp.fluid

  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Typography variant="h4" className={classes.subheading}>
          Authorization has been disabled for demo purposes.
          {/* "Roads? Where we're going, we dont need... roads."
          <br></br>
          <span style={{ fontStyle: "italic", fontSize: "18px" }}>
            -Emmett Lathrop "Doc" Brown, Ph. D.
          </span> */}
        </Typography>
        <LoginButton />
      </Box>
      <Box>
        <Img fluid={volvo} className={classes.image} />
      </Box>
    </Container>
  )
}

export default Login
