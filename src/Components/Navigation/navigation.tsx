import React, { Component } from "react";
import withResponsiveness, {
  ResponsivenessProps,
} from "../../lib/HOC/withResponsiveness";

import "./navigation.scss";
import { RiCloseLine } from "react-icons/ri";

import { Header } from "./Header/header";
import { Separator } from "../Separator/separator";
import { Profile } from "./Profile/profile";
import { NavItem } from "./NavItem/nav-item";

import ProfileLogo from "../../lib/assets/profile.png";
import { mainMenu, sideMenu } from "./navigation-constants";

interface NavigationProps extends ResponsivenessProps {
  showMenu: boolean;
  closeEvent: Function;
}

// TODO: add close button for mobile.
class Navigation extends Component<NavigationProps> {
  _handleClose = () => {
    this.props.closeEvent();
  };

  render() {
    const isMobile = this.props.isMobile;
    const isTabletOrMobile = this.props.isTablet || isMobile;

    return (
      <div
        className={`panel ${
          !isTabletOrMobile || (isTabletOrMobile && this.props.showMenu)
            ? "panel__show"
            : "panel__hide"
        }`}
      >
        <div className="nav__header">
          <Header text="Personal manager" />
          {isMobile ? (
            <RiCloseLine
              className="nav__close"
              size={21}
              onClick={this._handleClose}
            />
          ) : (
            ""
          )}
        </div>
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

export default withResponsiveness(Navigation);
