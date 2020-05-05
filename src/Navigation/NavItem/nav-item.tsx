import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./nav-item.scss";

import { Option } from "./Option/option";

interface NavItemProps {
  logo: any;
  route: string;
  name: string;
  options: Array<any>;
}

interface NavItemState {
  isActive: boolean;
}

export class NavItem extends Component<NavItemProps, NavItemState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    return (
      <div>
        <NavLink
          exact
          to={this.props.route}
          className="link"
          activeClassName="selected"
          isActive={(match, location) => {
            if (location.pathname === this.props.route) {
              if (!this.state.isActive) {
                this.setState({ isActive: true });
              }

              return true;
            } else {
              if (this.state.isActive) {
                this.setState({ isActive: false });
              }
              return false;
            }
          }}
        >
          <this.props.logo className="logo" />
          {this.props.name}
        </NavLink>
        {this.state.isActive
          ? this.props.options.map((option) => (
              <Option
                key={option.text.toLowerCase()}
                color={option.color}
                text={option.text}
                hash={option.hash}
              ></Option>
            ))
          : ""}
      </div>
    );
  }
}
