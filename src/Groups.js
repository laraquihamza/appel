import React, { useState } from "react";
import Group from "./Group";
import data from "../data";

/** Affiche toutes les classes. */
export default () => {
  const [groups, setGroups] = useState(data); //api.get('/mesgroupes')
  const { groupKeys } = groups;
  const updateStudent = (groupKey, studentName, isHere) =>
    setGroups((groups) => ({
      ...groups,
      [groupKey]: {
        ...groups[groupKey],
        [studentName]: { isHere }
      }
    }));

  const deleteStudent = (groupKey, studentName) => {
    var groupstudents = groups[groupKey].students;
    groupstudents = groupstudents.filter((student) => {
      console.log(studentName);
      return student.name !== studentName;
    });
    setGroups((groups) => ({
      ...groups,
      [groupKey]: {
        ...groups[groupKey],
        students: groupstudents
      }
    }));
  };

  const saveData = () => {
    //api.post('/mesclasses/appel')
    //ou localStorage.setItem('myData', myData)
  };
  return (
    <div>
      <h2>Mes classes</h2>
      <ul className="Groups">
        {groupKeys.map((groupKey) => (
          <Group
            key={groupKey}
            group={{ ...groups[groupKey], key: groupKey }}
            updateStudent={updateStudent}
            deleteStudent={deleteStudent}
          />
        ))}
      </ul>
      <button onClick={saveData}>Envoyer</button>
    </div>
  );
};
