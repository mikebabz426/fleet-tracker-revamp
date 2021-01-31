import * as React from "react"
import { Box, Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Haz from "../../assets/hazmat-icon.svg"
import Tnkr from "../../assets/tanker-icon.svg"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  icon: {
    maxWidth: 18,
    maxHeight: 18,
    margin: "0 .5rem",
  },
  box: {
    display: "flex",
    margin: "1rem 1rem",
  },
}))

const Legend: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography>Legend:</Typography>
      <Box className={classes.box}>
        <Haz className={classes.icon} />

        <Typography variant="body2">Hazmat</Typography>
      </Box>
      <Box className={classes.box}>
        <Tnkr className={classes.icon} />

        <Typography variant="body2">Tanker</Typography>
      </Box>
    </Container>
  )
}

export default Legend
