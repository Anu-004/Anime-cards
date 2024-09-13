import { useState } from "react";

const Onchange = () => {
    let [name,setName]=useState("Guest")
    let [num,setNum]=useState(1)
    let [cmt,setCmt]=useState("")
    let [pay,setPay]=useState("")
    let [ship,setShip]=useState("")
    const NameChange=(e)=>{setName(e.target.value)}
    const NumChange=(e)=>{setNum(e.target.value)}
  return (
   <div>
    <input type="text" onChange={NameChange}/>
    <p>Name: {name}</p>
    <input type="number" onChange={NumChange} />
    <p>Number:{num}</p>
    <textarea onChange={(e)=>{setCmt(e.target.value)}}/>
    <p>Text:{cmt}</p>
    <input checked={pay==="online"} type="radio" value="online" onChange={(e)=>{setPay(e.target.value)}}/>Online 
    <input checked={pay==="offline"} type="radio" value="offline" onChange={(e)=>{setPay(e.target.value)}}/>Offline 
    <p>Radio:{pay}</p>
    <select onChange={(e)=>{setShip(e.target.value)}} >
        <option>Debit</option>
        <option value="credit">Credit</option>
        <option value="upi">UPI</option>
    </select>
    <p>Option:{ship}</p>
   </div>
  )
}

export default Onchange
