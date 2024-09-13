import { useCallback,useState } from "react"

const Task7 = () => {

    const [count, setCount] = useState(0)

 const increment = () => {
    console.log("incr")
   setCount((prevCount) => prevCount + 1);
 }
    
  // Memoize the decrement function
    const decrement = useCallback(() => {
      console.log("decr")
    setCount((prevCount) => prevCount - 1);
  }, []);
  return (
    <div>
          <h1>Counter : {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Task7
