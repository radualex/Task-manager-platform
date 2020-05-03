import * as React from "react";
import "./navigation.scss";

export class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>Dashboard</li>
          <li>Tasks</li>
          <li>Email</li>
          <li>Contacts</li>
        </ul>
      </div>
    );
  }
}
