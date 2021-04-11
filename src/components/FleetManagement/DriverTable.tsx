import * as React from "react"
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  CircularProgress,
  Container,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Header from "./Header"

const DriverTable = () => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Table>
        <Header />
        <TableBody></TableBody>
      </Table>
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
  },
}))

export default DriverTable
