import React, { useState } from "react";
import "./index.css";
import { ChromePicker } from "react-color";

// function generateColourPickerInputs(rounds) {
//     return
// }

function Square(props) {
  return (
    <div
      className="square"
      onClick={props.onClick}
      style={{ background: props.color }}
    >
      {props.value}
    </div>
  );
}
export default function ColourPicker(props) {
  const colours = parseInt(props.colours);

  const [color, setColor] = useState("#fff");

  const fillArray = [];
  let len = colours;
  for (let i = 0; i < len; i++) {
    fillArray.push({
      id: i,
      color: color,
    });
  }

  console.log("This is the fill array", fillArray);

  // const colorArray = new Array(colours + 1).fill({
  //   id: colorArray[i],
  //   color: color,
  // });

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
