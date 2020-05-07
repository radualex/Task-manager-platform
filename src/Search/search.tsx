import React, { Component } from "react";
import { MdSearch, MdNotificationsNone } from "react-icons/md";
import "./search.scss";

interface SearchProps {
  placeholder?: string;
  notification: boolean;
}

export class Search extends Component<SearchProps> {
  render() {
    return (
      <div className="search">
        <MdSearch className="icon magnifier" />
        <input type="search" placeholder={this.props.placeholder}></input>
        <div className="notification">
          <MdNotificationsNone className="icon bell" />
          {this.props.notification ? <span className="badge"></span> : ""}
        </div>
      </div>
    );
  }
}
