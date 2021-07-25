import React from "react";
import { data } from "../../../data";



// dummy data coming in from data file
// export const data = [
//   { id: 1, name: "john" },
//   { id: 2, name: "peter" },
//   { id: 3, name: "susan" },
//   { id: 4, name: "anna" },
// ];


const UseStateArray = () => {
  // React.useState(data) is just a diffrent way of importing the data
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // filter out the matching items in the array
    let newPeople = people.filter((person) => person.id !== id);
    console.log(newPeople);
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
