import React, { Component } from "react";

import "./navigation.scss";

import { Header } from "./Header/header";
import { Separator } from "../Separator/separator";
import { Profile } from "./Profile/profile";
import { NavItem } from "./NavItem/nav-item";

import ProfileLogo from "../lib/assets/profile.png";
import { mainMenu, sideMenu } from "./navigation-constants";

// TODO: make it responsive
export class Navigation extends Component {
  render() {
    return (
      <div className="panel">
        <Header text="Personal manager" />
        <Separator margin={"8px -1rem"} />
        <Profile source={ProfileLogo} />
        <div className="mainMenu">
          {mainMenu.map((item) => (
            <NavItem
              key={item.name.toLowerCase()}
              name={item.name}
              route={item.route}
              logo={item.logo}
              options={item.options}
            />
          ))}
        </div>

        <Separator margin={"8px -1rem"} />
        <div className="sideMenu">
          {sideMenu.map((item) => (
            <NavItem
              key={item.name.toLowerCase()}
              name={item.name}
              route={item.route}
              logo={item.logo}
              options={item.options}
            />
          ))}
        </div>
      </div>
    );
  }
}
