import { useState } from "react"
import propType from "prop-types"
import "./t5.css"
const T5 = (props) => {
  // const name=props.name
  //  const [hobby,setHobby]=useState([])
  //  const [food,setFood]=useState([])
  const [clr,setClr]=useState("red")
  const Hitm=props.Itm1
  const Fitm=props.Itm2
  const list1=Hitm.map((Itm1)=>(<li>{Itm1}</li>))
  const list2=Fitm.map((Itm2)=>(<li>{Itm2}</li>))
  const ChangeClr=()=>{setClr( clr === "red" ? "green" : "red")}
  return (
    <div>
      
       <h3 style={{textAlign:"center"}}>The bg clr is {clr}</h3>
       <div className="container" style={{backgroundColor: clr}}>
        <button onClick={ChangeClr}>Toggle</button>
            <h1>{props.name}</h1>
            <img src={props.url} alt="" style={{borderRadius:"50px", width:"100px", height:"100px"}} />
            <p>{props.txt}</p>
            <h3>{props.arr1}</h3>
            <ul>{list1}</ul>
            <h3>{props.arr2}</h3>
            <ul>{list2}</ul>
       </div>
      
    </div>
  )
}

export default T5
