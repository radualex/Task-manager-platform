import React, { Component } from "react";
import "./circle.scss";
import { FaRegCircle } from "react-icons/fa";

interface CircleProps {
  color: string;
  size: number;
}

export class Circle extends Component<CircleProps> {
  render() {
    return <FaRegCircle color={this.props.color} size={this.props.size} />;
  }
}
