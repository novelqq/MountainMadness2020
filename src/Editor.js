import React from "react";
import PiScroller from "./Scroller";
import "./Editor.css";
import StockTicker from "./StockTicker";

class PiEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      arrow: 0
    };
  }

  render() {
    const style = {
      color: "black",
      width: "100%",
      height: "100%",
      backgroundColor: "white"
    };

    return (
      <div className="pi-editor" style={style}>
        <div style={style} className="edit-view">
          <input
            style={style}
            value={this.state.inputText}
            onChange={txt => this.update_view(txt)}
          />
        </div>
        <PiScroller />
        <StockTicker />
      </div>
    );
  }

  update_view(txt) {
    console.log(txt.target.value);
    this.setState({
      inputText: txt.target.value
    });
  }
}

export default PiEditor;
