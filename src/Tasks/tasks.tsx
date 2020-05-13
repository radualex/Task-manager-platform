import React, { Component } from "react";
import "./tasks.scss";

import { Search } from "../Search/search";

interface TasksState {
  notification: boolean;
}

export class Tasks extends Component<{}, TasksState> {
  readonly state = {
    notification: false,
  };
  _handleNotificationEvent = () => {
    this.setState({ notification: !this.state.notification });
  };

  render() {
    return (
      <div className="tasks content">
        <Search
          placeholder={"Search for a task"}
          notification={this.state.notification}
          notificationClicked={this._handleNotificationEvent}
        />
      </div>
    );
  }
}
