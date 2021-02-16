import * as React from "react"
import { useContext } from "react"
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  CircularProgress,
  Container,
} from "@material-ui/core"
import { FilterContext } from "../../FilterContext"
import TableHeader from "./TableHeader"
import TruckRow from "./TruckRow"

const FleetTable = props => {
  const [filters] = useContext(FilterContext)
  const { loading, error, data } = props

  if (loading)
    return (
      <Container>
        <CircularProgress />
      </Container>
    )
  if (error) return <p>Error :(</p>

  const { fleet_table: trucks } = data

  const filteredTrucks = trucks
    .filter(truck => {
      if (filters.team === "All") return true
      if (filters.team === truck.team) return true
      return false
    })
    .filter(truck => {
      if (filters.day === "All") return true
      if (filters.day === truck.day) return true
      return false
    })
    .map(truck => {
      return <TruckRow key={truck.id} {...truck} />
    })

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHeader />
        <TableBody>{filteredTrucks}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default FleetTable
