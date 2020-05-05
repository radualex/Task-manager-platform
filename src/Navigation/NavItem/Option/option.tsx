import React, { Component } from "react";
import { FaRegCircle } from "react-icons/fa";

import "./option.scss";

interface OptionProps {
  color: string;
  text: string;
  hash: string;
}

export class Option extends Component<OptionProps> {
  render() {
    return (
      <a href={`#${this.props.hash}`} className="option">
        <FaRegCircle color={this.props.color} size="0.5rem" />
        <span>{this.props.text}</span>
      </a>
    );
  }
}
