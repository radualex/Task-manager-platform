import React, { Component } from "react";
import "./dropdown.scss";

interface DropdownState {
  value: any;
}

export class Dropdown extends Component<{}, DropdownState> {
  constructor(props: any) {
    super(props);
    this.state = { value: "coconut" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: any) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = (event: any) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      </form>
    );
  }
}
