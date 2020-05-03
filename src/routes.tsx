import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./Dashboard/dashboard";
import { Tasks } from "./Tasks/tasks";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/tasks",
    component: Tasks,
  },
];

export class Routes extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            exact
            path={route.path}
            render={(props) => <route.component {...props} />}
          ></Route>
        ))}
      </Switch>
    );
  }
}