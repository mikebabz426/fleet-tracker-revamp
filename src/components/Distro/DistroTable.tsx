import * as React from "react"
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  Container,
} from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"
import DistroHeader from "./DistroHeader"
import DistroRow from "./DistroRow"

interface Props {
  day: string
  team: string
  data: any
  loading: any
  error: any
}

const DistroTable: React.FC<Props> = ({ day, team, data, error, loading }) => {
  const classes = useStyles()
  const { fleet_table: trucks } = data

  const filteredTrucks = trucks
    .filter(truck => {
      if (team === "All") return true
      if (team === truck.team) return true
      return false
    })
    .filter(truck => {
      if (day === "All") return true
      if (day === truck.day) return true
      return false
    })
    .map(truck => {
      return <DistroRow key={truck.id} {...truck} />
    })

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table
        aria-label="customized table"
        size="small"
        className={classes.table}
      >
        <DistroHeader />
        <TableBody>
          {loading ? (
            <Container>
              <CircularProgress color="secondary" />
            </Container>
          ) : null}

          {error ? <p>Error :(</p> : null}

          {filteredTrucks}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 500,
    maxWidth: 750,
  },
  table: {
    minWidth: 500,
    maxWidth: 750,
  },
}))

export default DistroTable
