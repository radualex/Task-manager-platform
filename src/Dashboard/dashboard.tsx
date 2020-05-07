import React, { Component } from "react";
import "./dashboard.scss";

import { Search } from "../Search/search";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard content">
        <Search placeholder={"Global search"} notification={false} />
      </div>
    );
  }
}
