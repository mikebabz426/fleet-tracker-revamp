import React from "react"
import { Typography, Box, Container } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: "10rem",
  },

  subheading: {
    fontWeight: 300,
    paddingLeft: "10px",
  },
  buttonContainer: {
    alignItems: "center",
    minWidth: "300px",
    margin: "2rem .5rem",
  },
  image: {
    width: 800,
    height: 600,
  },
}))

const Login = () => {
  const data = useStaticQuery(graphql`
    {
      volvo: file(relativePath: { eq: "volvo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const volvo = data.volvo.childImageSharp.fluid

  const classes = useStyles()

  return (
    <Container>
      <Typography variant="h4" className={classes.subheading}>
        Inspirational message to motivate dispatchers to get off their asses
      </Typography>
      <Box>
        <Img fluid={volvo} className={classes.image} />
      </Box>
    </Container>
  )
}

export default Login
