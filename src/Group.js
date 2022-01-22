import React, { useState } from "react";
import Student from "./Student";

/** Affiche une classe avec ses élève. */
export default function Group({ group, updateStudent, deleteStudent }) {
  var getPresent = () => {
    var res = 0;
    var i = {};
    for (i in group) {
      if (i.isHere) {
        res = res + 1;
      }
    }
    return res;
  };
  const { key, students, name } = group;
  const [show, setShow] = useState(true);
  const toggleStudents = () => setShow((show) => !show);
  return (
    <li className="Group">
      <h3 onClick={toggleStudents}>
        {name} ({students.filter((student) => student.isHere === true).length}/
        {students.length})
      </h3>

      {show === true ? (
        <ul>
          {students.map((student) => {
            return (
              <Student
                key={student.name}
                name={student.name}
                isHere={student.isHere}
                toggle={() => {
                  updateStudent(key, student, student.isHere);
                  student.isHere = !student.isHere;
                }}
                deleteStudent={() => {
                  deleteStudent(key, student.name);
                }}
              />
            );
          })}
        </ul>
      ) : null}
    </li>
  );
}
