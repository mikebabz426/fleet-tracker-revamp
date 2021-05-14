import * as React from "react"
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles"
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@material-ui/core"
import { Formik, Field } from "formik"

const DriverRow = props => {
  const classes = useStyles()
  const { id, driver, cell, truck, trailer, type, team, hazmat, tanker } = props
  return (
    <Formik
      initialValues={{
        id: id,
        driver: driver,
        cell: cell,
        truck: truck,
        trailer: trailer,
        type: type,
        team: team,
        hazmat: hazmat,
        tanker: tanker,
        edit: false,
      }}
      onSubmit={}
    >
      {({ values, setFieldValue, handleSubmit }) => {
        return (
          <StyledTableRow key={id}>
            <StyledTableCell component="th" scope="row">
              {driver}
            </StyledTableCell>
            <StyledTableCell>{cell}</StyledTableCell>
            <StyledTableCell>{truck}</StyledTableCell>
            <StyledTableCell>{trailer}</StyledTableCell>
            <StyledTableCell>{type}</StyledTableCell>
            <StyledTableCell>{team}</StyledTableCell>
            <StyledTableCell>{hazmat}</StyledTableCell>
            <StyledTableCell>{tanker}</StyledTableCell>
          </StyledTableRow>
        )
      }}
    </Formik>
  )
}

//Custom Styles

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#0257a2",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#EBF5FF",
      },
    },
  })
)(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})
export default DriverRow
