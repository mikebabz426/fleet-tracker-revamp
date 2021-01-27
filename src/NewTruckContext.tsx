import * as React from "react"
import { useState, createContext, Dispatch, SetStateAction } from "react"

type ContextType = { addTruck: boolean; setAddTruck: () => void }

export const NewTruckContext = createContext<
  [ContextType, Dispatch<SetStateAction<ContextType>>] | undefined
>(undefined)

export const NewTruckProvider: React.FC = props => {
  const [addTruck, setAddTruck] = useState(null)

  return (
    <NewTruckContext.Provider value={[addTruck, setAddTruck]}>
      {props.children}
    </NewTruckContext.Provider>
  )
}
