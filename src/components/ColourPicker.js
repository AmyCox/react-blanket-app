import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";

function Square(props) {
  return (
    <div
      className="square"
      onClick={props.onClick}
      style={{ background: props.color }}
      color={props.color}
    >
      <p>{props.value}</p>
    </div>
  );
}

export default function ColourPicker(props) {
  const numberOfColours = parseInt(props.colours);

  console.log("COLOURS VARIABLE", numberOfColours);
  const [color, setColor] = useState("#FFF");
  const [colorArray, setColorArray] = useState([]);

  let len = numberOfColours;

  console.log(len);

  console.log("YOLO", color);
  console.log("This is the colorArray", colorArray);

  // console.log("This is the fill array", fillArray);

  // const colorArray = new Array(colours + 1).fill({
  //   id: colorArray[i],
  //   color: color,
  // });

  // const squares = [...Array(colours)].map((e, i) => (
  //   <Square key={i} value={e} color={color} />
  // ));

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
      {colorArray.length < numberOfColours ? (
        <Button
          onClick={() => setColorArray((colorArray) => [...colorArray, color])}
          color="primary"
        >
          SUBMIT
        </Button>
      ) : null}

      <div>
        {colorArray.map((x, idx) => (
          <Square key={idx} color={colorArray[idx]} />
        ))}
      </div>
    </>
  );
}

// I want to select the number of colours

// once the number of colors has been inputted I want the color picker to show

// I want to use the color picker to set the state of the color

// when I click save colour I want a square with a background color of the color I selected to render

// I can only pick the number of colors that I inputted.
