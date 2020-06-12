import React, { Component } from "react";
import { MdSearch, MdNotificationsNone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./search.scss";

interface SearchProps {
  placeholder?: string;
  notification: boolean;
  notificationClicked: Function;
  hamburgerClicked: Function;
}

/**
 * @event 'notification-clicked' dispatched when the user clicks on the notification icon.
 */
export class Search extends Component<SearchProps> {
  _handleNotificationClicked = () => {
    this.props.notificationClicked();
  };

  _handleHamburgerClicked = () => {
    this.props.hamburgerClicked();
  };

  render() {
    return (
      <div className="search">
        <GiHamburgerMenu
          className="icon hamburger"
          onClick={this._handleHamburgerClicked}
        />
        <MdSearch className="icon magnifier" />
        <input type="search" placeholder={this.props.placeholder}></input>
        <div className="notification" onClick={this._handleNotificationClicked}>
          <MdNotificationsNone className="icon bell" />
          {this.props.notification ? <span className="badge"></span> : ""}
        </div>
      </div>
    );
  }
}
