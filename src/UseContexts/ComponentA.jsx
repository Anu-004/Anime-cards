import { createContext,useState } from "react"
import ComponentB from "./ComponentB"

export const UserContexts = createContext()
const ComponentA = () => {
const [user,SetUser]=useState("React")
  return (
    <div>
      <h1>Comp A, {user}</h1>
      <UserContexts.Provider value={user}>
        <ComponentB/>
        </UserContexts.Provider>
    </div>
  )
}

export default ComponentA
