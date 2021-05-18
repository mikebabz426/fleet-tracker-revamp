import React from "react"
import { TableCell, TableHead, TableRow } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const TableHeader = () => {
  const headerNames = [
    "Day",
    "Cell Phone",
    "Driver",
    "Truck",
    "Trailer",
    "H/T",
    "Type",
    "Location",
    "State",
    "Time",
    "Appt",
    "Status",
    "Needs",
    "Notes",
  ]
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell />
        <StyledTableCell>Edit</StyledTableCell>

        {headerNames.map(header => (
          <StyledTableCell key={header}>{header}</StyledTableCell>
        ))}
        <StyledTableCell>Copy</StyledTableCell>
      </TableRow>
    </TableHead>
  )
}

//Custom Styles

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#0257A2",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
    padding: ".2rem .5rem",
  },
}))(TableCell)

export default TableHeader
