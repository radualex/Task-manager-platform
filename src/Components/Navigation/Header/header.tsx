import React, { Component } from "react";
import "./header.scss";

interface HeaderProps {
  text: string;
}

export class Header extends Component<HeaderProps> {
  render() {
    return <h3 className="header">{this.props.text}</h3>;
  }
}
