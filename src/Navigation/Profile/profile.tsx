import React, { Component } from "react";
import "./profile.scss";

import { Logo } from "./Logo/logo";

interface ProfileProps {
  source: string;
}

export class Profile extends Component<ProfileProps> {
  render() {
    return (
      <div className="profile">
        <Logo source={this.props.source} />
        <div>
          <span className="profile__name">Radu-Alexandru Stoica</span>
          <span className="profile__email">radu.stoica1994@gmail.com</span>
        </div>
      </div>
    );
  }
}
