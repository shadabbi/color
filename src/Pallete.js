import React, { Component } from "react";

import "./Pallete.css";
import ColorBox from "./ColorBox";

class Pallete extends Component {
  render() {
    console.log(this.props.colors);
    const colorBoxes = this.props.colors.map((color) => {
      return <ColorBox bg={color.color} name={color.name} />;
    });
    return (
      <div className="Pallete">
        <div className="Pallete-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Pallete;
