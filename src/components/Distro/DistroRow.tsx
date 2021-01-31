import * as React from "react"
import { Typography, TableCell, TableRow } from "@material-ui/core"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Haz from "../../assets/hazmat-icon.svg"
import Tnkr from "../../assets/tanker-icon.svg"

interface Props {
  id: string
  day: string
  type: string
  location: string
  usState: string
  needs: string
  hazmat: boolean
  tanker: boolean
}

const DistroRow: React.FC<Props> = props => {
  const classes = useStyles()
  const { id, day, type, location, usState, needs, hazmat, tanker } = props

  let trailerClass
  type === "53' Van"
    ? (trailerClass = classes.van)
    : (trailerClass = classes.reefer)

  return (
    <StyledTableRow key={id}>
      <StyledTableCell />
      //Day
      <StyledTableCell>
        <Typography className={classes.typeStyle}>{day}</Typography>
      </StyledTableCell>
      //Endorsements
      <StyledTableCell>
        {hazmat ? <Haz className={classes.icon} /> : null}
        {tanker ? <Tnkr className={classes.icon} /> : null}
      </StyledTableCell>
      //Type
      <StyledTableCell>
        <Typography className={trailerClass}>{type}</Typography>
      </StyledTableCell>
      //Location
      <StyledTableCell>
        <Typography className={classes.typeStyle}>{location}</Typography>
      </StyledTableCell>
      //State
      <StyledTableCell>
        <Typography className={classes.typeStyle}>{usState}</Typography>
      </StyledTableCell>
      //Needs
      <StyledTableCell>
        <Typography className={classes.typeStyle}>{needs}</Typography>
      </StyledTableCell>
      <StyledTableCell />
    </StyledTableRow>
  )
}

//Custom Component Styling

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selected: {
    fontWeight: "bold",
  },
  inputCenter: {
    textAlign: "center",
    color: "red",
  },

  location: {
    fontWeight: "bold",
  },

  table: {
    minWidth: 700,
  },
  notes: {
    backgroundColor: "#fff",
  },
  typeStyle: {
    fontWeight: 500,
  },
  edit: {
    cursor: "pointer",
  },

  van: {
    color: "#43a047",
    fontWeight: 500,
  },
  reefer: {
    color: "#f44336",
    fontWeight: 500,
  },
  icon: {
    maxWidth: 18,
    maxHeight: 18,
    margin: "0px 3px",
  },
}))

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#0257A2",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    padding: ".5rem 1rem .5rem 1rem",
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#EBF5FF",
    },
  },
}))(TableRow)

export default DistroRow
