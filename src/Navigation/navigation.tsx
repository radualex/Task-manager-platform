import React, { Component } from "react";
import {
  RiDashboardLine,
  RiChat4Line,
  RiMailLine,
  RiTaskLine,
  RiTableLine,
  RiUserLine,
} from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

import "./navigation.scss";

import { Header } from "./Header/header";
import { Separator } from "./Separator/separator";
import { Profile } from "./Profile/profile";
import { NavItem } from "./NavItem/nav-item";

import ProfileLogo from "../lib/assets/profile.png";

// TODO: move this in a separate file.
const mainMenu = [
  {
    route: "/",
    logo: RiDashboardLine,
    name: "Dashboard",
  },
  {
    route: "/tasks",
    logo: RiTaskLine,
    name: "Tasks",
  },
  {
    route: "/email",
    logo: RiMailLine,
    name: "Email",
  },
  {
    route: "/contacts",
    logo: RiUserLine,
    name: "Contacts",
  },
  {
    route: "/chat",
    logo: RiChat4Line,
    name: "Chat",
  },
  {
    route: "/deals",
    logo: RiTableLine,
    name: "Deals",
  },
];

const sideMenu = [
  {
    route: "/settings",
    logo: BsThreeDots,
    name: "Settings",
  },
];

export class Navigation extends Component {
  render() {
    return (
      <div className="panel">
        <Header text="Personal manager" />
        <Separator />
        <Profile source={ProfileLogo} />
        <div className="mainMenu">
          {mainMenu.map((item) => (
            <NavItem
              key={item.name.toLowerCase()}
              name={item.name}
              route={item.route}
              logo={item.logo}
            />
          ))}
        </div>

        <Separator />
        <div className="sideMenu">
          {sideMenu.map((item) => (
            <NavItem
              key={item.name.toLowerCase()}
              name={item.name}
              route={item.route}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    );
  }
}
