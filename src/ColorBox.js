import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";

export class ColorBox extends Component {
  render() {
    const { name, bg } = this.props;
    return (
      <CopyToClipboard text={bg}>
        <div className="ColorBox" style={{ backgroundColor: bg }}>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-btn">Copy</button>
          </div>

          <span className="see-more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
