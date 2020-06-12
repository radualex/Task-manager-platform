import React, { Component } from "react";
import "./filter.scss";

import { Dropdown } from "../Dropdown/dropdown";

export class FilterProps {
  options: Array<string>;
}

export class Filter extends Component<FilterProps> {
  render() {
    return (
      <div className="filter">
        <span className="filter__label">Show:</span>
        <Dropdown options={this.props.options} />
      </div>
    );
  }
}
