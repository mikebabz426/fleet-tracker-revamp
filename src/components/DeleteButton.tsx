import * as React from "react"
import { Button } from "@material-ui/core"
import { withStyles, createStyles, Theme } from "@material-ui/core/styles"

const DeleteButton = ({ variant, size, click }) => {
  return (
    <StyledButton variant={variant} size={size} onClick={click}>
      Delete
    </StyledButton>
  )
}

const StyledButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.error.dark,
      "&:hover": {
        color: theme.palette.error.dark,
      },
    },
  })
)(Button)

//Custom Styles

export default DeleteButton
