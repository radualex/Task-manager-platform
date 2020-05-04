import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./nav-item.scss";

interface NavItemProps {
  logo: any;
  route: string;
  name: string;
}

//TODO: style menu with neutral5 and neutral4:hover as colors.
export class NavItem extends Component<NavItemProps> {
  render() {
    return (
      <div>
        <this.props.logo />
        <Link to={this.props.route}>{this.props.name}</Link>
      </div>
    );
  }
}
