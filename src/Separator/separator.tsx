import React, { Component } from "react";
import "./separator.scss";

// TODO: expose className to be passed from parent
export class Separator extends Component {
  render() {
    return <hr className="separator-header" />;
  }
}
