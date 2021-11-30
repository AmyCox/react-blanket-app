import React from "react";
import "./index.css";

// function generateColourPickerInputs(rounds) {
//     return
// }

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }
export default function ColourPicker(props) {
  const rounds = props.rounds;
  return (
    <>
      <h1>Colour Picker</h1>
      <h2>{rounds}</h2>
    </>
  );
}
