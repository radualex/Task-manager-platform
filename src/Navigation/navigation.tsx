import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";

export class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/email">Email</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </div>
    );
  }
}
