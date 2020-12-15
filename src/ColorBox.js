import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";

export class ColorBox extends Component {
  state = {
    copied: false,
  };
  render() {
    const { name, bg } = this.props;
    return (
      <CopyToClipboard
        text={bg}
        onCopy={() => {
          this.setState({ copied: true });
          setTimeout(() => {
            this.setState({ copied: false });
          }, 2000);
        }}
      >
        <div className="ColorBox" style={{ backgroundColor: bg }}>
          <div
            className="copy-overlay"
            style={{
              backgroundColor: bg,
              transform: this.state.copied ? "scale(50)" : "",
            }}
          />
          <div
            className="copy-message"
            style={{
              transform: this.state.copied ? "scale(1)" : "",
              opacity: 1,
              transition: "all 0.4s",
            }}
          >
            <h1>Copied!</h1>
            <p>{bg}</p>
          </div>
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
