import { useState } from "react"
const Obj = () => {
    const [car,setCar]=useState({
        Model:"Benz",
        Year:"2001"
    })
    const ChangeModel=(e)=>{
        // It clears the existing state and displays oly last value...In odr to clear this use SPREAD OPR
        setCar({...car,Model:e.target.value})
    }
    const ChangeYear=(e)=>{
        setCar(c=>({...c,Year:e.target.value}))
    }
  return (
    <div>
   <p>Your favo car is {car.Model} in {car.Year}</p>
   <input type="text" value={car.Model} onChange={ChangeModel}/> <br />
   <input type="number" value={car.Year} onChange={ChangeYear} />
    </div>
  )
}

export default Obj
