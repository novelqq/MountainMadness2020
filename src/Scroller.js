import React from "react";
/*import AppleScrollWheel from "react-native-apple-scroll-wheel";*/

class PiScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollValue: 0 };
  }

  render() {
    /*return (<AppleScrollWheel
      value={this.state.scrollValue}
      minValue={-720}
      increment={1}
      maxValue={720}
      onChangeValue={scrollValue => this.setState({ scrollValue })}
    />);*/
    return (
      <div
        className="tape"
        style={{
          willChange: "transform",
          position: "absolute",
          left: 0,
          bottom: 0,
                color: 'black',
          transform: `translate3d(${this.state.scrollValue}px, 0, 0)`
        }}
      >hello world</div>
    );
  }
}

export default PiScroller;
