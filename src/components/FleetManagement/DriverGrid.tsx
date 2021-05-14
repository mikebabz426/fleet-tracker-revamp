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

const DriverGrid = ({ loading, error, data }) => {
  const classes = useStyles()

  if (loading)
    return (
      <Container>
        <CircularProgress />
      </Container>
    )
  if (error) return <p>Error :(</p>

  const { fleet_table: drivers } = data

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Truck #</StyledTableCell>
            <StyledTableCell>Trailer #</StyledTableCell>
            <StyledTableCell>Trailer Type</StyledTableCell>
            <StyledTableCell>Team</StyledTableCell>
            <StyledTableCell>Hazmat</StyledTableCell>
            <StyledTableCell>Tanker</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drivers.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.driver}
              </StyledTableCell>
              <StyledTableCell>{row.cell}</StyledTableCell>
              <StyledTableCell>{row.truck}</StyledTableCell>
              <StyledTableCell>{row.trailer}</StyledTableCell>
              <StyledTableCell>{row.type}</StyledTableCell>
              <StyledTableCell>{row.team}</StyledTableCell>
              <StyledTableCell>{row.hazmat}</StyledTableCell>
              <StyledTableCell>{row.tanker}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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

export default DriverGrid
