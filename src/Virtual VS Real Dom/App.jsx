import React, { useRef } from "react";
import ComponentA from "./ComponentA";
import RealDOMComponent from "./RealDOMComponent";
import VirtualDOMComponent from "./VirtualDOMComponent";
import "./index.css";

const App = () => {
  const updateBoth = useRef({});

  const updateBothDOMs = () => {
    const realDOMTime = updateBoth.current.updateRealDOM();
    const virtualDOMTime = updateBoth.current.updateVirtualDOM();
    alert(
      Real DOM update took ${realDOMTime} milliseconds\n +
      Virtual DOM update took ${virtualDOMTime} milliseconds
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Props Drilling</h1>
      <ComponentA />
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "50px" }}>
        <RealDOMComponent updateBoth={updateBoth} />
        <VirtualDOMComponent updateBoth={updateBoth} />
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={updateBothDOMs}>Update Both DOMs</button>
      </div>
    </div>
  );
};

export default App;