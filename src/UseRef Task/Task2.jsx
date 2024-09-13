import { useRef,useEffect } from "react";

const Task2 = () => {
  const refVar = useRef(1);
  console.log(refVar.current);
  useEffect(() => {
    console.log("Component Rendered");
  });

  return (
    <div>
      <h1>UseRef Access the obj using current key</h1>
      <input type="text" />
      <button
        onClick={() => {
          refVar.current++;
          console.log(refVar);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default Task2;
