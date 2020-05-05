import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./nav-item.scss";

interface NavItemProps {
  logo: any;
  route: string;
  name: string;
}

export class NavItem extends Component<NavItemProps> {
  render() {
    return (
      <NavLink
        exact
        to={this.props.route}
        className="link"
        activeClassName="selected"
      >
        <this.props.logo className="logo" />
        {this.props.name}
      </NavLink>
    );
  }
}
