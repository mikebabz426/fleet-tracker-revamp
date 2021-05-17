import * as React from "react"
import {
  Container,
  InputBase,
  Typography,
  Button,
  Box,
} from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import AddIcon from "@material-ui/icons/Add"
import SearchIcon from "@material-ui/icons/Search"
import DriverGrid from "./DriverGrid"
import AddTruckForm from "../NewTruckForm/AddTruckForm"
import { useNewTruckContext } from "../../NewTruckContext"

const FleetManagement = props => {
  const [search, setSearch] = React.useState("")
  const { newTruck, setNewTruck } = useNewTruckContext()
  const classes = useStyles()
  const { loading, error, data } = props

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div>
      {newTruck ? null : (
        <Typography variant="h4" align="center" className={classes.heading}>
          Fleet Management
        </Typography>
      )}

      <Container className={classes.root}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem auto",
            width: 1080,
          }}
        >
          <Box
            style={{
              display: "flex",
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                visibility: newTruck ? "hidden" : "visible",
              }}
            >
              <Typography variant="body1" align="center">
                Search by truck number
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  value={search}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Box>
          </Box>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            className={classes.button}
            startIcon={newTruck ? <ArrowBackIcon /> : <AddIcon />}
            onClick={() => setNewTruck(!newTruck)}
          >
            {newTruck ? "Back" : "Add Truck"}
          </Button>
        </div>
        {newTruck ? (
          <AddTruckForm
            newTruck={newTruck}
            toggle={() => setNewTruck(!newTruck)}
          />
        ) : (
          <DriverGrid
            loading={loading}
            error={error}
            data={data}
            search={search}
          />
        )}
      </Container>
    </div>
  )
}

//Custom Styles

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#66bb6a",
        color: "#fff",
      },
    },
    heading: {
      fontVariant: "small-caps",
    },

    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#fff",
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
)

export default FleetManagement
