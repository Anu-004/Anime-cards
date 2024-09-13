import { useState,useRef, useEffect } from "react"

const RefState = () => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
    console.log(
      "prevCountRef.current value inside useEffect",
      prevCountRef.current
    );
  });

  const prevCount = prevCountRef.current;

  console.log("Count State Value", count);
  console.log("Previous Count", prevCount);
  return (
    <div>
       <p>count: {count}</p>
      <p>prevCount: {prevCount}</p>

      <button onClick={() => setCount((c) => c + 1)}>add</button>
   
    </div>
  )
}

export default RefState
