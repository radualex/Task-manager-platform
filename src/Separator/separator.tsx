import React, { Component } from "react";
import "./separator.scss";

interface SeparatorProps {
  margin: string;
}

export class Separator extends Component<SeparatorProps> {
  render() {
    return (
      <hr
        className="separator-header"
        style={{ margin: `${this.props.margin}` }}
      />
    );
  }
}
