import React from "react";

//getting the amount of rounds in the square
//Need to get width - the number of squares in the blanket
//Need to get height - the height of squares in the blanket

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: null,
      width: null,
      height: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      rounds: event.target.value,
      width: event.target.width,
      height: event.target.height,
    });
  }

  handleSubmit(event) {
    alert(
      "A round value was submitted: " +
        this.state.rounds +
        "A width value was submitted: " +
        this.state.width +
        "A height value was submitted: " +
        this.state.height
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Rounds:{" "}
          <input
            type="number"
            value={this.state.rounds}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Width:{" "}
          <input
            type="number"
            value={this.state.width}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Height:{" "}
          <input
            type="number"
            value={this.state.height}
            onChange={this.handleChange}
          ></input>
        </label>
      </form>
    );
  }
}
