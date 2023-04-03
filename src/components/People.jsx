import React from "react";
// import useStore from "../store";
import { usePeopleStore } from "../store";

 function People() {
  const people = usePeopleStore((state) => state.people);
  return (
    <div>
      <p>we have {people.length} people in our DB</p>
      <ul>
        {people.map((p) => (
          <li>{p}</li>
        ))}
      </ul>
    </div>
  );
}
export default People