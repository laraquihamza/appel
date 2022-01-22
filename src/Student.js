import React from "react";

/** Afficha un élève. */
export default ({ name, isHere, toggle, deleteStudent }) => (
  <li className="Student">
    <input
      onClick={toggle}
      type="checkbox"
      checked={isHere}
      onChange={() => {
        isHere = !isHere;
      }}
    />
    <label>{name}</label>
    <button onClick={deleteStudent}>X</button>
  </li>
);
