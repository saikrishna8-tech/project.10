import React from "react";
import "./index.css";
import "./App.css";
import AddMarks from "./AddMarks";
import MarkList from "./MarkList";
import MarksProvider from "./MarksContext";

export default function App() {
  return (
    <MarksProvider>
      <div className="app-container">
        <h1>Welcome to KL University Marks Portal</h1>
        <AddMarks />
        <MarkList />
      </div>
    </MarksProvider>
  );
}