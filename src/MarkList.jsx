import React, { useContext } from "react";
import { MarksContext } from "./MarksContext.jsx";

export default function MarksList() {
  const { marks } = useContext(MarksContext);

  return (
    <div className="cards-container">
      <h3>Student Marks List</h3>
      {marks.length === 0 ? (<p className="empty-text">No student records found</p> ) : 
      ( marks.map((student, index) => (
          <div className="card" key={index}>
            <h4>{student.name}</h4>
            <p>Marks: {student.score}</p>
          </div>
        ))
      )}
    </div>
  );
}