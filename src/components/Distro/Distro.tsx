import * as React from "react"
import { useState } from "react"
import {
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"
import { makeStyles } from "@material-ui/core/styles"
import Legend from "./Legend"
import DistroTable from "./DistroTable"
import { weekDays } from "../../services/services"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  btnGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))

const initialState = {
  team: "All",
  day: "All",
}

const Distro: React.FC = () => {
  const [visibility, setVisibility] = useState(false)
  const [filter, setFilter] = useState(initialState)
  const classes = useStyles()

  const teams = ["Mike", "Alex", "Chip", "Vlad"]

  const handleChange = (e, type) => {
    type === "day"
      ? setFilter({ ...filter, day: e.target.value })
      : setFilter({ ...filter, team: e.target.value })
  }

  return (
    <Container className={classes.root}>
      <Container className={classes.btnGroup}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Day</InputLabel>
          <Select
            labelId="select-outlined-label"
            id="select-outlined"
            onChange={e => handleChange(e, "day")}
            label="Day"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {weekDays.map(day => (
              <MenuItem value={day}>{day}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Team</InputLabel>
          <Select
            labelId="select-outlined-label"
            id="select-outlined"
            onChange={e => handleChange(e, "team")}
            label="Team"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {teams.map(team => (
              <MenuItem value={team}>{team}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {visibility ? (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setVisibility(!visibility)}
          >
            <ClearIcon />
            Clear
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setVisibility(!visibility)}
          >
            Generate
          </Button>
        )}
      </Container>
      {visibility ? (
        <>
          <Legend />
          <DistroTable {...filter} />
        </>
      ) : (
        <Typography variant="body2">
          Please make the required selections, when done click generate to view
          the distribution list.
        </Typography>
      )}
    </Container>
  )
}

export default Distro
