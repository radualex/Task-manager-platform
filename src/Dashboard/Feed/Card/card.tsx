import React, { Component } from "react";
import "./card.scss";

export class Card extends Component {
  render() {
    return (
      <div className="feed__card">
        <div className="feed__row__one">
          <span className="feed__card__header">
            Send benefit review by Sunday
          </span>
          <span className="feed__card__type">Reminder</span>
        </div>
      </div>
    );
  }
}
