import React, { Component } from "react";
import "./app.scss";
import { Routes } from "../routes";

import Navigation from "../Components/Navigation/navigation";

interface AppState {
  showMenu: boolean;
}

export class App extends Component<{}, AppState> {
  readonly state = {
    showMenu: false,
  };

  constructor(props: any) {
    super(props);
    this._updatePredicate = this._updatePredicate.bind(this);
  }

  componentDidMount() {
    this._updatePredicate();
    window.addEventListener("resize", this._updatePredicate);
  }

  _updatePredicate() {
    let vh = window.innerHeight / 100;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  _handleMenuClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div className="container">
        <Navigation
          showMenu={this.state.showMenu}
          closeEvent={this._handleMenuClick}
        />
        <Routes hamburgerClicked={this._handleMenuClick} />
      </div>
    );
  }
}
