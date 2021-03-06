import React, { useState } from "react";
import ColourPicker from "./ColourPicker";
import Grid from "./Grid";
import "./../App.css";

//create object literal for default values to all input fields
const initialValues = {
  rounds: "",
  width: "",
  height: "",
  numberOfColours: "",
};

export default function Form() {
  const [values, setValues] = useState(initialValues);
  const colours = values.numberOfColours;

  const moreThanFive = colours > 5;

  if (moreThanFive)
    throw new Error("You must select the number of colours between 1-5");

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
      <div className="formContainer">
        <div className="headingContainer">
          <h1>Blanket App</h1>
        </div>

        <div className="formInputContainer">
          <form>
            <div className="formInput">
              <label>
                Number of colours:
                <input
                  value={values.numberOfColours}
                  onChange={handleInputChange}
                  name="numberOfColours"
                  style={{ marginLeft: 30 }}
                />{" "}
              </label>
            </div>
            <div className="formInput">
              <label>
                Rounds:
                <input
                  style={{ marginLeft: 111 }}
                  value={values.rounds}
                  onChange={handleInputChange}
                  name="rounds" //IMPORTANT - need to add a name attribute to inputs so we can set a dynamic name property key
                />
              </label>
            </div>
            <div className="formInput">
              <label>
                Width:
                <input
                  style={{ marginLeft: 122 }}
                  value={values.width}
                  onChange={handleInputChange}
                  name="width" //IMPORTANT
                />
              </label>
            </div>
            <div className="formInput">
              <label>
                Height:
                <input
                  style={{ marginLeft: 118 }}
                  value={values.height}
                  onChange={handleInputChange}
                  name="height" //IMPORTANT
                />
              </label>
            </div>
          </form>
        </div>

        <div className="submitContainer">
          <button className="buttonStyle" onClick={handleSubmit}>
            SUBMIT
          </button>
          <button className="buttonStyle" onClick={reset}>
            RESET
          </button>
        </div>
      </div>

      {values.numberOfColours > 0 ? (
        <ColourPicker style={{ marginLeft: 40 }} colours={colours} />
      ) : null}
      <Grid
        numberOfRounds={values.rounds}
        width={values.width}
        height={values.width}
      />
    </>
  );
}
