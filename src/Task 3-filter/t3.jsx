// import "t3.css"
import { useState } from "react"
const t3 = () => {
    let [inputBox,setinputBox]=useState("")
    const listFilter=(e)=>{setinputBox(e.target.value)}
    
    const list=[{id:1,name:"Jackie Chan"},
        {id:2,name:"ShinChan"},
        {id:3,name:"Ben 10"},
        {id:4,name:"Hilda"},
        {id:5,name:"Doremon"}
    ]
    
    // const target
    // const inputVal=(e)=>{e.target.value}
    // const items=list.map(prop=>(
    //     <ul key={prop.id}>
    //         <li>{prop.name}</li>
    //     </ul>
    // ))
    const result=list.filter((res)=>res.name.toLowerCase().includes(inputBox.toLowerCase())).map((res)=>(
        <ul key={res.id}>
            <li>{res.name}</li>
        </ul>
    ))
  return (
    <div>
      <input onChange={listFilter}
      type="text"
       placeholder="search characters"/>
      {result}
    </div>
  )
}

export default t3
