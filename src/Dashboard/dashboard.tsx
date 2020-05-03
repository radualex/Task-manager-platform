import * as React from "react";
import "./dashboard.scss";

export interface DashboardProps {
  name: string;
}

export class Dashboard extends React.Component<DashboardProps, {}> {
  render() {
    return <h1>Dashboard {this.props.name}</h1>;
  }
}
