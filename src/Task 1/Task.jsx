import propTyp from "prop-types"
import "./task.css"
const Task = (props) => {
    const disp=props.boxes
    const main=disp.map((box)=> (
    <div className="card" key={box.id}>
    <img src={box.url} alt="" />
  
    <h2>{box.name}</h2>
    <p>{box.txt}</p>
    </div>))
    
  return (
    <>

   {/* <img src={props.url} alt="img" height="200px" width="250px"/>
   <h2 style={{margin:0}}>{props.name}</h2>
   <p>{props.txt}</p> */}
   <div className="flex">  
    {main}
    </div>
 
   </>
  )

}
Task.propTyp={
  // name:propTyp.string,
  // txt:propTyp.string,
  boxes:propTyp.array

}
Task.default={
  // name:"none",
  // txt:"An alt img"
  boxes:[]
}
export default Task
