import React, { Component } from "react";
import "./dashboard.scss";

import { Search } from "../../Components/Search/search";
import Feed from "./Feed/feed";
import { Graph } from "./Graph/graph";

import { cards } from "../../lib/data/cards";

interface DashboardState {
  notification: boolean;
}

interface DashboardProps {
  hamburgerClicked: Function;
}

export class Dashboard extends Component<DashboardProps, DashboardState> {
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
      <div className="dashboard content">
        <Search
          placeholder={"Global search"}
          notification={this.state.notification}
          notificationClicked={this._handleNotificationEvent}
          hamburgerClicked={this._handleHamburgerEvent}
        />
        <div className="dashboard__wrapper">
          <Feed cards={cards} />
          <div className="dashboard__graphs">
            <Graph
              options={["This week", "Next week", "Next month"]}
              text={"Deals"}
              type={"area"}
              cards={cards}
            />
            <Graph
              options={["This week", "Next week", "Next month"]}
              text={"Tasks"}
              type={"donut"}
              cards={cards}
            />
          </div>
        </div>
      </div>
    );
  }
}
