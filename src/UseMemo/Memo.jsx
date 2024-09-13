import { useState, useMemo } from "react";

const Memo = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
// var assigned fr useMemo
    const doubleNumber = useMemo(() => {
    console.log("useMemo doubleNum ran")
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
    return(
        <>
    <h1>UseMemo & useState</h1>
    <input
      type="text"
      value={number}
      onChange={(e) => setNumber(parseInt(e.target.value))}
    />

    <button onClick={() => setDark((d) => !d)}>Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    {/* <div style={themeStyles}>{slowFunction(number)}</div> */}
  </>
);
};

const slowFunction = (number) => {
console.log("Calling slow function");
for (let i = 0; i < 1000000000; i++) {} // Simulate a slow computation
return number * 2;
};
// };

export default Memo;
