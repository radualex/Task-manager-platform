import React, { Component } from "react";
import "./tasks.scss";

import { Search } from "../Search/search";

export class Tasks extends Component {
  render() {
    return (
      <div className="tasks content">
        <Search placeholder={"Search for a task"} notification={false} />
      </div>
    );
  }
}
