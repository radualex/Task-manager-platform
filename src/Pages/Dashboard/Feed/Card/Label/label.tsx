import React, { Component } from "react";
import "./label.scss";

interface LabelProps {
  text: string;
  color: string;
}

export class Label extends Component<LabelProps> {
  render() {
    return (
      <span className="card__label" style={{ background: this.props.color }}>
        {this.props.text}
      </span>
    );
  }
}
