import * as React from "react"
import { Grid } from "@material-ui/core"
import FleetTable from "./Table/FleetTable"
import AddTruckForm from "./NewTruckForm/AddTruckForm"
import { gql, useQuery } from "@apollo/client"
import { makeStyles } from "@material-ui/core/styles"
import { useNewTruckContext } from "../NewTruckContext"
import { useDistroContext } from "../DistroContext"
import Distro from "./Distro/Distro"

interface Props {
  children?: React.ReactNode
}

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
  },
}))

const FLEET_ALL = gql`
  query FLEET_ALL {
    fleet_table {
      appt
      cell
      day
      driver
      id
      location
      needs
      notes
      status
      team
      time
      trailer
      truck
      type
      usState
      hazmat
      tanker
    }
  }
`

const Main: React.FC<Props> = ({}) => {
  const { loading, error, data, refetch } = useQuery(FLEET_ALL)
  const classes = useStyles()
  const { newTruck, setNewTruck } = useNewTruckContext()
  const { distro } = useDistroContext()

  return (
    <Grid container className={classes.container}>
      <Grid item xs={false} sm={false} />
      <Grid item xs={12} sm={12}>
        {newTruck ? (
          <AddTruckForm
            refetch={refetch}
            newTruck={newTruck}
            toggle={() => setNewTruck(!newTruck)}
          />
        ) : distro ? (
          <Distro />
        ) : (
          <FleetTable
            loading={loading}
            data={data}
            error={error}
            refetch={refetch}
          />
        )}
      </Grid>
      <Grid item xs={false} sm={false} />
    </Grid>
  )
}

export default Main
