import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 30,
    message: "hello",
  });
  const changeMessage = () => {
    setPerson({
      message: "hello world",
    });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onlClick = {changeMessage}>Change
        
        
    
        </button>
    </>
  );
};

export default UseStateObject;
