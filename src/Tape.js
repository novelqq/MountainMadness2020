import React from "react";
import "./Tape.css";

class PiTape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: 0,
      items: [],
      currentTriplet: ""
    };
  }

  componentDidMount() {
    this.getPiDigits();
  }

  getCurrentTriplet() {
    return this.state.currentTriplet;
  }

  async getPiDigits() {
    let url = "";
    let url1 = "https://api.pi.delivery/v1/pi?start=";
    let url2 = "&numberOfDigits=";
    let pairsArray = [];
    url = url1 + "0" + url2 + "1000";
    try {
      let fetchResponse = await fetch(url);
      let json = await fetchResponse.json();
      console.log(json.content);
      const notTau = json.content;

      for (let inc = 0; inc < notTau.length - 3; inc++) {
        let pair =
          "" +
          notTau.charAt(inc) +
          notTau.charAt(inc + 1) +
          notTau.charAt(inc + 2);
        pairsArray.push(pair);
      }

      this.setState({ items: pairsArray });
    } catch (err) {
      console.log(err);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.position);
    console.log(prevState.items.length);
    if (prevState.items.length > nextProps.position) {
      return { currentTriplet: prevState.items[nextProps.position] };
    }
    return null;
  }

  render() {
    const style = {
      position: "absolute",
      bottom: this.props.yOffset - 19,
      left: this.props.xOffset - 40,
      width: "100%",
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: 40,
      color: "black"
    };
    /*
    let centeredTape = "";
    if (this.state.items.length > this.props.position) {
      centeredTape = this.state.items[this.props.position];
      this.setState({ currentTriplet: centeredTape });
    }*/

    return (
      <div style={style} ref="clickerTape" className="noselect">
        {this.state.currentTriplet}
      </div>
    );
  }
}

export default PiTape;
