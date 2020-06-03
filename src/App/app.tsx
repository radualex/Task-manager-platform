import React, { Component } from "react";
import "./app.scss";
import { Routes } from "../routes";

import Navigation from "../Navigation/navigation";

interface AppState {
  showMenu: boolean;
}

export class App extends Component<{}, AppState> {
  readonly state = {
    showMenu: false,
  };

  _handleHamburgerClicked = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div className="container">
        <Navigation showMenu={this.state.showMenu} />
        <Routes hamburgerClicked={this._handleHamburgerClicked} />
      </div>
    );
  }
}
