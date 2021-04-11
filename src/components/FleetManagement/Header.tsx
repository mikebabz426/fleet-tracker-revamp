import React from "react"
import { TableCell, TableHead, TableRow } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const TableHeader = () => {
  const headerNames = [
    "Driver",
    "Cell Phone",
    "Truck",
    "Trailer",
    "H/T",
    "Type",
    "Team",
  ]
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell />
        <StyledTableCell />

        {headerNames.map(header => (
          <StyledTableCell key={header}>{header}</StyledTableCell>
        ))}
        <StyledTableCell />
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
