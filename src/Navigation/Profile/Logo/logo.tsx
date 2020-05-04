import React, { Component } from "react";
import "./logo.scss";

interface LogoProps {
  source: string;
}

export class Logo extends Component<LogoProps> {
  render() {
    return <img src={this.props.source} alt='profile logo'></img>;
  }
}
