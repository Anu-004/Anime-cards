import { useState,memo } from "react"
import StaticMessage from "./StaticMessage"
import CounterDisplay from "./CounterDisplay"
const Task9 = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>React.memo</h2>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <CounterDisplay count={count} />
      <StaticMessage/>
    </div>
  )
}

export default Task9
