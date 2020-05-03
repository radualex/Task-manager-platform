import React, { Component } from "react";
import "./app.scss";
import { Routes } from "../routes";

import { Navigation } from "../Navigation/navigation";

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Routes />
      </div>
    );
  }
}
