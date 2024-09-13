import { useContext } from "react";
import { UserContext } from "./ComponentA";

const ComponentD = () => {
    const user = useContext(UserContext)
  return (
    <div>
       <h1>Comp D,{user}</h1>
    </div>
  )
}

export default ComponentD
