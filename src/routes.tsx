import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Dashboard } from "./Dashboard/dashboard";
import { Tasks } from "./Tasks/tasks";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  // TODO: add all routes
];

interface RouteProps {
  hamburgerClicked: Function;
}

// TODO: see what's wrong with routes when refresh and the path is not /
export class Routes extends Component<RouteProps> {
  _handleHamburgerClicked = () => {
    this.props.hamburgerClicked();
  };

  render() {
    return (
      <Switch>
        {routes.map(({ path, component: C }, i) => (
          <Route
            key={`route-${i}`}
            exact
            path={path}
            component={(props: any) => (
              <C {...props} hamburgerClicked={this._handleHamburgerClicked} />
            )}
          ></Route>
        ))}
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}
