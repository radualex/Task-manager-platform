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
  readonly state = {
    isActive: false,
  };

  render() {
    return (
      <div>
        <NavLink
          exact
          to={this.props.route}
          className="link"
          activeClassName="selected"
          isActive={(match, location) => {
            let activeStatus = location.pathname === this.props.route;
            if (activeStatus !== this.state.isActive) {
              this.setState({
                isActive: activeStatus,
              });
            }
            return activeStatus;
          }}
        >
          <this.props.logo className="logo" />
          {this.props.name}
        </NavLink>
        {this.state.isActive ? (
          <div className="options">
            {this.props.options.map((option) => (
              <Option
                key={option.text.toLowerCase()}
                color={option.color}
                text={option.text}
                hash={option.hash}
              ></Option>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
