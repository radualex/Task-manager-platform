import React, { Component } from "react";
import "./logo.scss";

interface LogoProps {
  source: string;
  height: string;
}

export class Logo extends Component<LogoProps> {
  render() {
    return (
      <img
        src={this.props.source}
        alt="profile logo"
        style={{ height: this.props.height }}
      ></img>
    );
  }
}
