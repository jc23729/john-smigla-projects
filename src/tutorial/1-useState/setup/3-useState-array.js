import React from "react";
import { data } from "../../../data";



const UseStateArray = () => {
  // React.useState(data) is just a diffrent way of importing the data
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {/* we map and for each person  */}
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* setPeople set to an empty array, but right away its invoked
      so we setup an arrow function to invoke it only when we click on the button */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </> 
  );
};

export default UseStateArray;
