import React, { Component } from "react";
import ReactDropdown from "react-dropdown";

import "./dropdown.scss";

interface DropdownProps {
  options: Array<string>;
}

interface DropdownState {
  value: string;
}

export class Dropdown extends Component<DropdownProps, DropdownState> {
  readonly state = {
    value: this.props.options[0],
  };

  _onSelect = (ev: any) => {
    this.setState({ value: ev.value });
  };

  render() {
    return (
      <ReactDropdown
        className="dropdown"
        arrowClassName="dropdown__arrow"
        controlClassName="dropdown__control"
        menuClassName="dropdown__menu"
        placeholderClassName="dropdown__placeholder"
        value={this.state.value}
        options={this.props.options}
        onChange={this._onSelect}
      />
    );
  }
}
