import React from "react";
import "./Tape.css";

class PiTape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: 0,
      items: [],
      currentTriplet: "",
      previousTriplets: "",
      futureTriplets: "",
      digits: ""
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

      this.setState({ digits: notTau });
      this.setState({ items: pairsArray });
    } catch (err) {
      console.log(err);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log(nextProps.position);
    //console.log(prevState.items.length);
    if (prevState.items.length > nextProps.position) {
      let prev = "";
      for (
        let inc = 0;
        inc < nextProps.position && inc < prevState.digits.length;
        inc++
      ) {
        prev += "" + prevState.digits[inc];
      }
      let next = "";
      for (
        let inc = nextProps.position + 3;
        inc < nextProps.position + 75 && inc < prevState.digits.length;
        inc++
      ) {
        next += "" + prevState.digits[inc];
      }
      return {
        currentTriplet: prevState.items[nextProps.position],
        previousTriplets: prev,
        futureTriplets: next
      };
    }
    return null;
  }

  render() {
    // I had this looking nicer but Javascript references got weird
    // So I just did it the fast and not so nice way
    const leftStyle = {
      position: "absolute",
      bottom: this.props.yOffset - 20,
      right: this.props.canvasX + 2 * this.props.xOffset,
      width: "auto",
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: 40,
      color: "black",
      overflow: "hidden"
    };
    const middleStyle = {
      position: "absolute",
      bottom: this.props.yOffset - 20,
      left: this.props.canvasX + this.props.xOffset - 36,
      width: "auto",
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: 40,
      color: "black"
    };
    const rightStyle = {
      position: "absolute",
      bottom: this.props.yOffset - 20,
      left: this.props.canvasX + 2 * this.props.xOffset,
      width: "auto",
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
      <div className="noselect" style={{overflowX: "hidden", width: "100%"}}>
        <div style={leftStyle}>{this.state.previousTriplets}</div>
        <div style={middleStyle}>{this.state.currentTriplet}</div>
        <div style={rightStyle}>{this.state.futureTriplets}</div>
      </div>
    );
  }
}

export default PiTape;
