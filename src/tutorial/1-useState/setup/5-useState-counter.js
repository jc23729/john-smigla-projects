import React, { useState } from "react";
// useState() is a higher-order function /hook that use a state
const UseStateCounter = () => {
  //  so we set up our state value 
  const[ value, setValue] = useState(0);
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        {/* heading h1 we just target our value */}
        <h1>{value}</h1>
        {/* we're going to setup 3 buttons increase, decrease, reset */}
        <button className="btn">Decrease</button>
        <button className="btn">Increase</button>
        <button className="btn">Reset</button>
      </section>
    </>
  );
};

export default UseStateCounter;
