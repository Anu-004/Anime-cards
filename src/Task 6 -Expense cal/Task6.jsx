// To see diff. in UseMemo create a counter btn
import { useState, useMemo, useEffect } from "react";

const Task6 = () => {
//   const [num, setnum] = useState(0);
//   const [squared, setSquared] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSquared(num * num);
//     }, 1000);
//     // Clean up the timeout if the component unmounts or if num changes
//     return () => clearTimeout(timer);
//   }, [num]);
//   return (
//     <div>
//       <h1>Expense calculator sqr (useMemo)</h1>
//       <input
//         type="number"
//         onChange={(e) => {
//           setnum(Number(e.target.value));
//         }}
//       />
//       <br />
//       <p>SqrRoot of {num} is {squared}</p>
//     </div>
  //   );
  


  const [number, setNumber] = useState(0);

  // Simulate an expensive calculation (1-second delay)
  const slowSquare = (num) => {
    console.log("Calculating square...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) { } // Simulate heavy calculation
    return num * num;
  };

  // Memoize the calculation result
  const squaredNumber = useMemo(() => {
    return slowSquare(number);
  }, [number]);

  return (
    <div>
      <h2>Expensive Calculation (Square of a Number)</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
      />
      <p>Square of {number}: {squaredNumber}</p>
    </div>
  );

};
export default Task6;
