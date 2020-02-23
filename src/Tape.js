import React from "react";

class PiTape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: 0,
      items: []
    };
  }

  componentWillMount() {
    this.getPiDigits();
  }

  componentWillUnmount() {
    clearInterval(this.activeInterval);
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

      for (let inc = 0; inc < json.content.length - 3; inc++) {
        let pair =
          "" +
          json.content.charAt(inc * 2) +
          json.content.charAt(inc * 2 + 1) +
          json.content.charAt(inc * 2 + 2);
        pairsArray.push(pair);
      }

      this.setState({ items: pairsArray });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const style = {
      position: "absolute",
      bottom: this.props.yOffset - 19,
      left: this.props.position,
      width: "100%",
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: 40,
        color: 'black'
    };

    return (
      <div style={style} ref="clickerTape">
        something random
      </div>
    );
  }
}

export default PiTape;
