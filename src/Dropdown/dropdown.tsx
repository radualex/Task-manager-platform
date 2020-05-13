import React, { Component } from "react";
import ReactDropdown from "react-dropdown";

import "./dropdown.scss";

interface DropdownProps {
  options: Array<string>;
}

interface DropdownState {
  defaultOption: string;
}

export class Dropdown extends Component<DropdownProps, DropdownState> {
  readonly state = {
    defaultOption: this.props.options[0],
  };

  render() {
    return (
      <ReactDropdown
        className="dropdown"
        arrowClassName="dropdown__arrow"
        controlClassName="dropdown__control"
        menuClassName="dropdown__menu"
        placeholderClassName="dropdown__placeholder"
        value={this.state.defaultOption}
        options={this.props.options}
      />
    );
  }
}
