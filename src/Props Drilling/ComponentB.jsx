import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ user }) => {
  return (
    <div className="box">
      <h1>Component B</h1>
      <h2 style={{ color: "green" }}>{`Component B received: ${user}`}</h2>
      {/* Passing user as a prop to ComponentC */}
      <ComponentC user={user} />
    </div>
  );
};

export default ComponentB;