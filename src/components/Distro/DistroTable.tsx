import * as React from "react"
import { Paper, TableContainer, Table, TableBody } from "@material-ui/core"
import DistroHeader from "./DistroHeader"
import DistroRow from "./DistroRow"
import { string } from "prop-types"

interface Props {
  team: string
  day: string
}

const DistroTable: React.FC<Props> = props => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table" size="small">
        <DistroHeader />
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  )
}

export default DistroTable
