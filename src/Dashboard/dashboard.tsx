import React, { Component } from "react";
import "./dashboard.scss";

import { Search } from "../Search/search";
import { Feed } from "./Feed/feed";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard content">
        <Search placeholder={"Global search"} notification={false} />
        <Feed completedTasks={8} maximumTasks={10} />
      </div>
    );
  }
}
