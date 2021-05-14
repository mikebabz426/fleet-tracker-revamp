import * as React from "react"
import { Button } from "@material-ui/core"

const UpdateButton = ({ color, variant, size, click }) => {
  return (
    <Button color={color} variant={variant} size={size} onClick={click}>
      Update
    </Button>
  )
}

export default UpdateButton
