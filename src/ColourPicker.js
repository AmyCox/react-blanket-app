import React from "react";
import "./index.css";
import { ChromePicker } from "react-color";

// function generateColourPickerInputs(rounds) {
//     return
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default function ColourPicker(props) {
  const rounds = parseInt(props.rounds);
  console.log("Rounds", rounds, typeof rounds);

  //   const squares = [...Array(rounds)].map((e, i) => (
  //     <Square key={i} value={e} />
  //   ));
  //   console.log("This is the squares", squares);

  const squares = [...Array(rounds)].map((e, i) => (
    <Square key={i} value={e} />
  ));
  console.log(squares);
  return (
    <>
      <h1>Colour Picker</h1>
      <h2>{rounds}</h2>
      <ChromePicker />
      {squares}
    </>
  );
}
