import React, { useContext, useEffect } from "react"
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  CircularProgress,
} from "@material-ui/core"
import { FilterContext } from "../../FilterContext"
import TableHeader from "./TableHeader"
import TruckRow from "./TruckRow"
import CssBaseline from "@material-ui/core/CssBaseline"

const FleetTable = props => {
  const [filters] = useContext(FilterContext)
  const { loading, error, data, refetch } = props

  useEffect(() => {
    refetch()
  }, [filters, refetch])

  if (loading) return <CircularProgress />
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
      return <TruckRow refetch={refetch} key={truck.id} {...truck} />
    })

  return (
    <CssBaseline>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHeader />
          <TableBody>{filteredTrucks}</TableBody>
        </Table>
      </TableContainer>
    </CssBaseline>
  )
}

export default FleetTable
