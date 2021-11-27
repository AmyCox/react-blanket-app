import React, { useState } from "react";

export default function Form() {
  const [newRounds, setRounds] = useState("");
  const [newWidth, setWidth] = useState("");
  const [newHeight, setHeight] = useState("");

  const reset = () => {
    setRounds("");
    setWidth("");
    setHeight("");
  };

  function handleSubmit(event) {
    alert(
      "A round value was submitted: " +
        newRounds +
        " " +
        "A width value was submitted: " +
        newWidth +
        " " +
        "A height value was submitted: " +
        newHeight
    );
    event.preventDefault();
  }

  return (
    <>
      <form>
        <label>
          Rounds:
          <input
            value={newRounds}
            onChange={(e) => setRounds(e.target.value)}
          />
        </label>
        <label>
          Width:
          <input value={newWidth} onChange={(e) => setWidth(e.target.value)} />
        </label>
        <label>
          Height
          <input
            value={newHeight}
            onChange={(e) => setHeight(e.target.value)}
            label="Height"
          />
        </label>
      </form>
      <button onClick={handleSubmit}>SUBMIT</button>
      <button onClick={reset}>RESET</button>
    </>
  );
}
