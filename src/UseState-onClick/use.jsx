import { useState } from "react";


const use = () => {
    // var state declaration
    let [name,setName]=useState("Anu")
    let [age,setAge]=useState(0)
    let[val,setVal]=useState(0)
    const updAge=()=>{setAge=50}
  return (
   
    <div>
        <p>Age:{age}</p>
        <button onClick={updAge}>AgeHere</button>
      <p>Name: {name}</p>
      <button onClick={()=>setName("changed")}>NameHere</button>
     

      <p>Input: {val}</p>
      <button onClick={()=>setVal(++val)}>IncrementHere</button>
       <button onClick={()=>setVal(--val)}>DecrementHere</button> 
      <button onClick={()=>setVal(val=0)}>ResetHere</button>
    </div>
  )
}
// previousSt => previousSt +1 ------------UPDATER FUNCTION
export default use
