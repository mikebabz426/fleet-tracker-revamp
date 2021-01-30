import * as React from "react"
import { CssBaseline } from "@material-ui/core"
import PropTypes from "prop-types"
import Header from "./Header"
import "@fontsource/roboto"
import GlobalThemeProvider from "../GlobalThemeProvider"
import { useNewTruckContext } from "../NewTruckContext"
import { useDistroContext } from "../DistroContext"

interface Props {
  children?: React.ReactNode
  margin: boolean
}

const Layout: React.FC<Props> = ({ children, margin }) => {
  const { newTruck, setNewTruck } = useNewTruckContext()
  const { distro, setDistro } = useDistroContext()

  return (
    <GlobalThemeProvider>
      <CssBaseline>
        <Header
          margin={margin}
          setNewTruck={() => setNewTruck(!newTruck)}
          newTruck={newTruck}
          setDistro={() => setDistro(!distro)}
          distro={distro}
        />
        {children}
      </CssBaseline>
    </GlobalThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
