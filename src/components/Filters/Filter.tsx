import React from "react"
import { FormControl, Select, InputBase } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/core/styles"

const Filter = ({ label, options, handler }) => {
  const classes = useStyles()

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        className={classes.selected}
        native
        label={label}
        input={<CustomInput />}
        onChange={handler}
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}

//Custom Component Styling

const CustomInput = withStyles(theme => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 14,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      borderRadius: 4,
      borderColor: theme.palette.secondary,
      backgroundColor: theme.palette.background.paper,
      boxShadow: `0 0 0 0.2rem rgba(102,187,106,.75)`,
    },
  },
}))(InputBase)

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 80,
  },
  selected: {
    fontWeight: "bold",
  },
}))

export default Filter
