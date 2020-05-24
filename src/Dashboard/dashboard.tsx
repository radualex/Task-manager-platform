import React, { Component } from "react";
import "./dashboard.scss";

import { Search } from "../Search/search";
import { Feed } from "./Feed/feed";
import { Graph } from "./Graph/graph";

interface DashboardState {
  notification: boolean;
}

export class Dashboard extends Component<{}, DashboardState> {
  readonly state = {
    notification: false,
  };
  _handleNotificationEvent = () => {
    this.setState({ notification: !this.state.notification });
  };
  render() {
    return (
      <div className="dashboard content">
        <Search
          placeholder={"Global search"}
          notification={this.state.notification}
          notificationClicked={this._handleNotificationEvent}
        />
        <div className="dashboard__wrapper">
          <Feed />
          <div className="dashboard__graphs">
            <Graph
              options={["This week", "Next week", "Next month"]}
              text={"Deals"}
              type={"area"}
            />
            <Graph
              options={["This week", "Next week", "Next month"]}
              text={"Tasks"}
              type={"donut"}
            />
          </div>
        </div>
      </div>
    );
  }
}
