import * as React from "react"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const Edit = () => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <h4>This is the Edditing Area</h4>
    </Box>
  )
}

//Custom Styling

const useStyles = makeStyles(theme => ({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 600,
    backgroundColor: "#0257A2",
  },
}))

export default Edit
