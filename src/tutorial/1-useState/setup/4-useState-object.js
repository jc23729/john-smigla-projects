import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 30,
    message: "hello",
  });
  console.log(person);
  return <h2>useState object example</h2>;
};

export default UseStateObject;
