import React from "react";
import ComponentD from "./ComponentD";

const ComponentC = ({ user }) => {
  return (
    <div className="box">
      <h1>Component C</h1>
      <h2 style={{ color: "purple" }}>{`Component C received: ${user}`}</h2>
      {/* Passing user as a prop to ComponentD */}
      <ComponentD user={user} />
    </div>
  );
};

export default ComponentC;