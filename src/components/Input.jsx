import React, { useRef } from "react";
import { usePeopleStore } from "../store";

export default function Input() {
  const InputRef = useRef();
  const addPerson = usePeopleStore((state) => state.addPerson);

  const add = () => {
    addPerson(InputRef.current.value);
    InputRef.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={InputRef} />
      <button onClick={add}>Add Person</button>
    </div>
  );
}
