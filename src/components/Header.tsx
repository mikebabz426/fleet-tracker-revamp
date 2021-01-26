import React, { useContext, useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
  Fab,
} from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import { FilterContext } from "./../FilterContext"
import Filter from "./Filters/Filter"

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: 100,
  },
  typographyStyles: {
    color: "#fff",
  },
  toolbar: {
    justifyContent: "space-between",
    margin: "0 0",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    backgroundColor: "#fff",
    color: "#66bb6a",
    marginLeft: "1rem",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#66bb6a",
    },
  },
}))

const Header = ({ margin }) => {
  const classes = useStyles()
  const { user, isAuthenticated } = useAuth0()
  const [filters, setFilters] = useContext(FilterContext)
  const [fuelPrice, setFuelPrice] = useState(0)
  const teamOptions = ["All", "Mike", "Alex", "Chip", "Vlad"]
  const dayOptions = ["All", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const handleChange = (e, type) => {
    type === "day"
      ? setFilters({ ...filters, day: e.target.value })
      : setFilters({ ...filters, team: e.target.value })
  }

  const getFuelPrice = async () => {
    await fetch(
      `https://api.eia.gov/series/?api_key=5c7387cb68efe9616f46194d17493e35&series_id=PET.EMD_EPD2D_PTE_NUS_DPG.W`
    )
      .then(res => res.json())
      .then(data => setFuelPrice(data.series[0].data[0][1]))
  }

  useEffect(() => {
    getFuelPrice()
  })

  return (
    <Container className={margin ? classes.container : null}>
      <AppBar color="primary" position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            <Typography variant="h6" className={classes.typographyStyles}>
              My Fleet Tracker
            </Typography>
          </Link>
          {isAuthenticated ? (
            <>
              <Typography className={classes.typographyStyles} variant="body2">
                US Diesel Price Avg: ${fuelPrice} /G
              </Typography>
              <Box className={classes.box}>
                <Typography>Team Filter: </Typography>
                <Filter
                  label="Team"
                  options={teamOptions}
                  handler={e => handleChange(e, "team")}
                />
                <Typography>Day Filter: </Typography>
                <Filter
                  label="Day"
                  options={dayOptions}
                  handler={e => handleChange(e, "day")}
                />
                <Typography>Add Truck: </Typography>
                <Fab
                  onClick={props.addTruck}
                  className={classes.fab}
                  size="small"
                  color="primary"
                  aria-label="add"
                >
                  {props.addTruckState ? <ArrowBackIcon /> : <AddIcon />}
                </Fab>
              </Box>
            </>
          ) : null}

          <Box className={classes.box}>
            {isAuthenticated ? (
              <>
                <Typography>Welcome, {user.name}</Typography>
                {""}
                <LogoutButton />
              </>
            ) : null}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
