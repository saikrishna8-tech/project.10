import React, { useContext, useState } from "react";
import { MarksContext } from "./MarksContext";

export default function AddMarks() {
  const { addMark } = useContext(MarksContext);

  const [name, setName] = useState("");
  const [mark, setMark] = useState("");

  const handleAdd = () => {
    if (name && mark) {
      addMark({ name, score: Number(mark) });
      setName("");
      setMark("");
    }
  };

  return (
    <div>
      <h3>Add Student Marks</h3>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Student Score"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
      />

      <button onClick={handleAdd}>Add Mark</button>
    </div>
  );
}