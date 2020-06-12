import React, { Component } from "react";
import "./tasks.scss";

import { Search } from "../../Components/Search/search";

interface TasksState {
  notification: boolean;
}

interface TaskProps {
  hamburgerClicked: Function;
}

export class Tasks extends Component<TaskProps, TasksState> {
  readonly state = {
    notification: false,
  };
  _handleNotificationEvent = () => {
    this.setState({ notification: !this.state.notification });
  };

  _handleHamburgerEvent = () => {
    this.props.hamburgerClicked();
  };

  render() {
    return (
      <div className="tasks content">
        <Search
          placeholder={"Search for a task"}
          notification={this.state.notification}
          notificationClicked={this._handleNotificationEvent}
          hamburgerClicked={this._handleHamburgerEvent}
        />
      </div>
    );
  }
}
