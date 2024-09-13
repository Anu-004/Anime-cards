import { useEffect, useState } from "react";
// const Effect = () => {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("red");

//   const counter = () => {
//     setCount((c) => c + 1);
//     console.log("button clicked");
//   };

//   const changeColor = () => {
//     setColor((c) => (c === "red" ? "blue" : "red"));
//   };

//   useEffect(() => {
//     document.title = `clicked ${count}, ${color}`;
//   }, [color]);

//   return (
//     <div>
//       <h1>UseEffect Hook</h1>

//       <p>Count : {count}</p>
//       <p style={{ color: color }}>Color: {color} </p>
//       <button onClick={counter}>count</button>
//       <button onClick={changeColor}>color</button>
//     </div>
//   );
// };

// export default UseEffect;

const Effect = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const [height, seHeight] = useState(window.innerHeight);
  
    const [count, setCount] = useState(0);
  
    const handleResize = () => {
      setWidth(window.innerWidth);
      seHeight(window.innerHeight);
    };
  
    useEffect(() => {
      document.title = `size ${width}, ${height} ${count}`;
      window.addEventListener("resize", handleResize);
    },[width, height, count]);
   
  return (
    <div>
       <h1>How useState works</h1>
    <p>
        Width: {width}, Height: {height}
      </p>
      <p>count: {count}</p>

      <button onClick={() => setCount((c) => c + 1)   
            
         }>
      add</button>
      {console.log("count:", count)}
    </div>
  )
}

export default Effect
