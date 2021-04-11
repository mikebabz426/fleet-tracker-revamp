import * as React from "react"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Edit from "./Edit"
import DriverTable from "./DriverTable"

const FleetManagement = props => {
  const classes = useStyles()
  const { loading, error, data } = props
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>This is the Fleet management area</h1>
      <Container className={classes.root}>
        <DriverTable />
        <Edit />
      </Container>
    </div>
  )
}

//Custom Styles

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
}))

export default FleetManagement
