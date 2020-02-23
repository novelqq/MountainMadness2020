import React from "react";
import { PythonShell } from "python-shell";

class AsciiDisplay extends React.Component {
  render() {
    const style = {
      background: "rgb(255, 255, 255)",
      border: 1,
      float: "left",
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 34,
      height: 34,
      marginRight: -1,
      marginTop: -1,
      padding: 0,
      textAlign: "center",
      width: 34
    };
    return (
      <button style={style} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
class PithonRunner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTriplet: "",
      fullString: "",
      pythonOutput: []
    };
  }

  execute(someCode) {
    PythonShell.runString(
      'print("hi")',
      null,
      function(err, results) {
        if (err) throw err;
        this.setState({ pythonOutput: results });
        console.log("results: %j", results);
      }.bind(this)
    );
  }

  render() {
    let val = this.state.pythonOutput.join("\r\n");
    return <div style={{ overflow: "hidden", width: "100%" }}>{val}</div>;
  }
}

export default PithonRunner;
