import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";

function Square(props) {
  return (
    <div
      className="square"
      onClick={props.onClick}
      style={{ background: props.color }}
    >
      <p>{props.value}</p>
    </div>
  );
}

export default function ColourPicker(props) {
  const numberOfColours = parseInt(props.colours);

  console.log("COLOURS VARIABLE", numberOfColours);
  const [color, setColor] = useState("#FFF");

  let len = numberOfColours;

  console.log(len);

  console.log("YOLO", color);

  // console.log("This is the fill array", fillArray);

  // const colorArray = new Array(colours + 1).fill({
  //   id: colorArray[i],
  //   color: color,
  // });

  // const squares = [...Array(colours)].map((e, i) => (
  //   <Square key={i} value={e} color={color} />
  // ));

  function submitColor(color, numberOfColours) {
    console.log("COLOR", color);
    console.log("NUMBER OF COLOURS", numberOfColours);
    let selected = [];
    console.log("First selected", selected);
    console.log("CHECK THE LENGTH OF THE ARRAY", selected.length);
    if (selected.length < numberOfColours) {
      console.log("GET'S HERE");
      selected.push(color);
    }
    console.log("second selected", selected);
    return selected;
  }

  return (
    <>
      <h1 style={{ color }}>Colour Picker</h1>
      <h2>{numberOfColours}</h2>
      <ChromePicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />
      <Button
        onClick={() => submitColor(color, numberOfColours)}
        color="primary"
      >
        SUBMIT
      </Button>
    </>
  );
}

// I want to select the number of colours

// once the number of colors has been inputted I want the color picker to show

// I want to use the color picker to set the state of the color

// when I click save colour I want a square with a background color of the color I selected to render

// I can only pick the number of colors that I inputted.
