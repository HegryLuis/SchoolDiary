import "./App.css";
import React, { useState } from "react";
import DiaryWrap from "./Components/DiaryWrap";

function App() {
  const [students, setStudents] = useState([
    {
      id: 0,
      name: "John Smith",
      math: 5,
      english: 5,
      physics: 4,
      music: 3,
    },
    {
      id: 1,
      name: "Kate Johnson",
      math: 5,
      english: 4,
      physics: 5,
      singing: 4,
    },
    {
      id: 2,
      name: "Joh Bread",
      math: 3,
      english: 4,
      physics: 3,
      history: 5,
    },
    { id: 3, name: "Ed Paul", math: 4, english: 4, physics: 3, history: 4 },
    {
      id: 4,
      name: "Paul Arrow",
      math: 5,
      english: 3,
      physics: 5,
      dancing: 4,
    },
    {
      id: 5,
      name: "Aaron Williams",
      math: 4,
      english: 4,
      physics: 4,
      crafting: 5,
    },
    {
      id: 6,
      name: "Baron Williams",
      math: 4,
      english: 4,
      physics: 4,
      crafting: 5,
    },
    {
      id: 7,
      name: "Caron Williams",
      math: 4,
      english: 4,
      physics: 4,
      crafting: 5,
    },
  ]);

  const [subjectsToShow, setSubjectsToShow] = useState([
    "math",
    "english",
    "physics",
    "crafting",
    "dancing",
    "singing",
    "history",
  ]);

  return (
    <div className="App">
      <div className="wrap">
        <DiaryWrap
          students={students}
          subjectsToShow={subjectsToShow}
          handleStudents={setStudents}
          handleSubjects={setSubjectsToShow}
        />
      </div>
    </div>
  );
}

export default App;
