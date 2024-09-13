import { useEffect, useMemo, useState } from "react";


const App21 = () => {
    const [count, setCount] = useState(10);
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 2, 1, 3]);
  
    const showMax = () => {
      console.log("showMax triggered");
      for (let i = 0; i < 1000000000; i++) {}
      return Math.max(...arr);
    };
    useEffect(() => {
      showMax();
    }, [arr]);
  
    const memoVal = useMemo(() => {
      showMax();
    }, [arr]);
   
  return (
    <div>
      <h1>useMemo usin array</h1>
      <button onClick={() => setCount(count + 1)}>
        add count</button>
      <button onClick={() => setArr([...arr, Math.floor(count * Math.random())])}
      > add to arr</button>
      <p>Array: {JSON.stringify(arr)}</p>
      <p>{memoVal}</p>
      <p>highest: {showMax()}</p>
      <p>starts frm : {count}</p>
    </div>
  )
}

export default App21
