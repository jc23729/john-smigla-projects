import React from "react";

const ErrorExample = () => {

  let title = "random title";
  const handleClick = () => {
 title = "hello people"
     
   };

  return (
    <>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
