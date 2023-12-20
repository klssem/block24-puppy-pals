import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setfeatPupId] = useState(null);

  // console.log(puppies);
  const clickHandler = (id) => {
    setfeatPupId(id);
  };

  const featuredPup = puppies.find((puppy) => {
    return puppy.id === featPupId;
  });

  // console.log(featuredPup);
  return (
    <>
      <h1>Puppy Pals</h1>
      <div id="flexContainer">
        <div className="featured">
          {featPupId && (
            <div>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
              <br />
              <br />
            </div>
          )}
        </div>
        <div id="puppyList">
          {puppies.map((puppy) => {
            return (
              <p
                key={puppy.id}
                onClick={() => {
                  // setfeatPupId(puppy.id);
                  clickHandler(puppy.id);
                }}
              >
                {puppy.name}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
