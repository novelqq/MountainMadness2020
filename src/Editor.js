import React from "react";
import PiScroller from "./Scroller";
import "./Editor.css";

class PiEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      arrow: 0
    };
  }

  getTextFromCode(s) {
    var val = parseInt(s);
    return String.fromCharCode(val % 128);
  }

  childUpdateHandler(s) {
    /*
        if (this.refs.inputScroller.state.codeAdditions.length > 0)
        {
            let additions = '';
            for (const s in this.refs.inputScroller.state.codeAdditions)
            {
                additions += this.getTextFromCode(s);
            }
            this.refs.inputScroller.setState({codeAdditions : []});
            this.setState({inputText: this.state.inputText + additions});
        }
        */
    switch (parseInt(s) % 128) {
      case 0: {
        // null
      }
      case 1: {
        // start of heading (??)
      }
      default: {
        this.setState({
          inputText: this.state.inputText + this.getTextFromCode(s)
        });
      }
    }
  }

  render() {
    const style = {
      color: "black",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: 40,
      padding: 0,
      margin: 0,
      type: "text"
    };

    return (
      <div className="pi-editor" style={style}>
        <div style={style} className="edit-view">
          <input readOnly style={style} value={this.state.inputText} />
        </div>
        <PiScroller
          inputReadyHandler={this.childUpdateHandler.bind(this)}
          ref="inputScroller"
        />
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
