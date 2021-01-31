import React from "react"
import { TableCell, TableHead, TableRow } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const TableHeader = () => {
  const headerNames = ["Day", "", "Type", "Location", "State", "Needs"]
  return (
    <StyledTableHead>
      <StyledTableRow>
        <StyledTableCell />
        <StyledTableCell />

        {headerNames.map(header => (
          <StyledTableCell key={header}>{header}</StyledTableCell>
        ))}
        <StyledTableCell />
      </StyledTableRow>
    </StyledTableHead>
  )
}

//Custom Styles

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#0257A2",
    color: theme.palette.common.white,
    padding: ".3rem .3rem 0rem .3rem",
    textAlign: "left",
  },
  body: {
    fontSize: 18,
    padding: ".3rem .3rem 0rem .3rem",
    textAlign: "left",
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    padding: ".2rem 0rem",
  },
}))(TableRow)

const StyledTableHead = withStyles(theme => ({
  root: {
    padding: ".2rem 0rem",
  },
}))(TableHead)

export default TableHeader
