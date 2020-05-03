import * as React from "react";
import "./app.scss";

import { Dashboard } from "../Dashboard/dashboard";
import { Navigation } from "../Navigation/navigation";

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Dashboard name="Radu"></Dashboard>
      </div>
    );
  }
}
