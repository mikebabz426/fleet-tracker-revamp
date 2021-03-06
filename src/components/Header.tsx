import * as React from "react"
import { useContext, useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
  Button,
} from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import { FilterContext } from "./../FilterContext"
import Filter from "./Filters/Filter"
import LocalShippingIcon from "@material-ui/icons/LocalShipping"
import ListAltIcon from "@material-ui/icons/ListAlt"
import ViewListIcon from "@material-ui/icons/ViewList"

interface Props {
  infoDisplay: boolean
  margin: boolean
  distro: boolean
  setDistro: () => void
  settings: boolean
  setSettings: () => void
}

const Header: React.FC<Props> = ({
  infoDisplay,
  margin,
  distro,
  setDistro,
  settings,
  setSettings,
}) => {
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
      `https://api.eia.gov/series/?api_key=${process.env.EIA_API_KEY}&series_id=PET.EMD_EPD2D_PTE_NUS_DPG.W`
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
          {infoDisplay && isAuthenticated && (
            <>
              <Typography className={classes.typographyStyles} variant="body2">
                US Diesel Price Avg: ${fuelPrice} /G
              </Typography>

              <Box className={classes.box}>
                <Box
                  className={classes.box}
                  style={{
                    visibility: distro || settings ? "hidden" : "visible",
                  }}
                >
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
                </Box>

                <Box className={classes.box}>
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    className={classes.button}
                    disabled={settings ? true : false}
                    startIcon={distro ? <ViewListIcon /> : <ListAltIcon />}
                    onClick={setDistro}
                  >
                    {distro ? "Truck Board" : "New Truck List"}
                  </Button>
                </Box>
                <Box className={classes.box}>
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    className={classes.button}
                    disabled={distro ? true : false}
                    startIcon={
                      settings ? <ViewListIcon /> : <LocalShippingIcon />
                    }
                    onClick={setSettings}
                  >
                    {settings ? "Truck Board" : "Fleet Management"}
                  </Button>
                </Box>
              </Box>
            </>
          )}

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

//Custom Styles

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
    margin: "0px 1rem",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#66bb6a",
      color: "#fff",
    },
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

export default Header
