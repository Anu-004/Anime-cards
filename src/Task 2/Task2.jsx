import "./task2.css"
import propTyp from "prop-types"
import { useState } from "react"
const Task2 = (props) => {
    let [state,setState]=useState(false)
const btn=()=>{
   setState(!state)
}
  return (
<div className="card">
        <div className="in">
      <img style={{borderRadius:"5px",width:"140px",height:"150px"}} src={props.url} alt="" />
      <h3 style={{margin:0}}>{props.name}</h3>
      <p>{props.para}</p>
      <button onClick={btn}>{state?"UnFollow":"Follow"}</button>
    </div>
     </div>
  
  )
}

export default Task2
