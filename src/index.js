import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Input from "./Input";
import TestForm from "./TestForm";
// import ColourPicker from "./components/ColourPicker";
import Form from "./components/Form";
import reportWebVitals from "./reportWebVitals";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    //Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    //You can also log error message to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      //Error path
      return (
        <div>
          <h2>You've entered too high a number</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br></br>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    //Normally just render children
    return this.props.children;
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <Input /> */}
    <ErrorBoundary>
      <Form />
    </ErrorBoundary>
    {/* <TestForm /> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
