import React, { createContext, useState } from "react";

export const MarksContext = createContext();

export default function MarksProvider({ children }) {
  const [marks, setMarks] = useState([]);

  function addMark(student) {
    setMarks((prev) => [...prev, student]);
  }

  return (
    <MarksContext.Provider value={{ marks, addMark }}>
      {children}
    </MarksContext.Provider>
  );
}