import React, { useState } from "react";
import "./index.css";
import { ChromePicker } from "react-color";

// function generateColourPickerInputs(rounds) {
//     return
// }

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={{ background: props.color }}
    >
      {props.value}
    </button>
  );
}
export default function ColourPicker(props) {
  const colours = parseInt(props.colours);

  const [color, setColor] = useState("#fff");

  //   const squares = [...Array(rounds)].map((e, i) => (
  //     <Square key={i} value={e} />
  //   ));
  //   console.log("This is the squares", squares);

  const squares = [...Array(colours)].map((e, i) => (
    <Square key={i} value={e} color={color} />
  ));
  console.log(squares);
  return (
    <>
      <h1 style={{ color }}>Colour Picker</h1>
      <h2>{colours}</h2>
      <ChromePicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />
      {squares}
    </>
  );
}
