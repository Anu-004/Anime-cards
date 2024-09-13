import React, { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [user, setUser] = useState("React is Fun");

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2 style={{ color: "sandybrown" }}>{`Hello ${user}`}</h2>
      {/* Passing user as a prop to ComponentB */}
      <ComponentB user={user} />
    </div>
  );
};

export default ComponentA;