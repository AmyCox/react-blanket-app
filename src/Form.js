import React, { useState } from "react";
import ColourPicker from "./ColourPicker";

//create object literal for default values to all input fields
const initialValues = {
  rounds: "",
  width: "",
  height: "",
};

export default function Form() {
  const [values, setValues] = useState(initialValues);
  const rounds = values.rounds;

  //handle ALL inputs with a single onChange handler
  const handleInputChange = (e) => {
    // const name = e.target.name
    //const value = e.target.value

    //using object destructuring to get or extract the name and value attributes from our inputs. We update our values state object with the existing values by using the setValues function and the spread operator. We finalle update the value of the event that was triggered by that onChange with ES6 syntac [name]:value
    const { name, value } = e.target;

    setValues({
      ...values,
      //here we are setting a dynamic name property key (taken from our inputs e.g width)
      [name]: value,
    });
  };

  const reset = () => {
    return setValues(initialValues);
  };

  function handleSubmit(event) {
    alert(
      "A round value was submitted: " +
        values.rounds +
        " " +
        "A width value was submitted: " +
        values.width +
        " " +
        "A height value was submitted: " +
        values.height
    );
    event.preventDefault();
  }

  return (
    <>
      <h1>Blanket App</h1>
      <form>
        <label>
          Rounds:
          <input
            value={values.rounds}
            onChange={handleInputChange}
            name="rounds" //IMPORTANT - need to add a name attribute to inputs so we can set a dynamic name property key
          />
        </label>
        <label>
          Width:
          <input
            value={values.width}
            onChange={handleInputChange}
            name="width" //IMPORTANT
          />
        </label>
        <label>
          Height
          <input
            value={values.height}
            onChange={handleInputChange}
            name="height" //IMPORTANT
          />
        </label>
      </form>
      <button onClick={handleSubmit}>SUBMIT</button>
      <button onClick={reset}>RESET</button>

      {values.rounds > 0 ? <ColourPicker rounds={rounds} /> : null}
    </>
  );
}
