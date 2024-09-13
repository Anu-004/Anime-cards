import { useRef ,useEffect} from "react"

const Task = () => {
    
  const refVar = useRef()
  useEffect(() => {
    console.log("component rendered");
  });
  // const 
  
  return (
    <div>
       <h1>how useRef works, Access the input tag directly</h1>
      <input type="text" ref={refVar} />
      <button onClick={() => console.log(refVar.current)}>Submit</button>
    </div>
  )
}

export default Task
