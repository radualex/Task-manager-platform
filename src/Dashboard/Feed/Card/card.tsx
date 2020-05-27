import React, { Component } from "react";

import { colors } from "../../../lib/theme";
import "./card.scss";

import { Label } from "./Label/label";
import { Logo } from "../../../Logo/logo";
import { Circle } from "./Circle/circle";

import { MdEdit, MdDelete } from "react-icons/md";

interface CardProps {
  task: string;
  type: string;
  date: string;
  status: string;
  logo: any;
  name: string;
  editMode: boolean;
}

export class Card extends Component<CardProps> {
  _getColorFromStatus(): string {
    const status = this.props.status;

    switch (status) {
      case "Completed":
        return colors.primary;
      case "Active":
        return colors.secondary1;
      case "Ended":
        return colors.secondary2;
      default:
        return colors.neutral2;
    }
  }

  render() {
    return (
      <div className="feed__card">
        <div className="feed__row__one">
          <span className="feed__card__header">{this.props.task}</span>
          <span className="feed__card__type">{this.props.type}</span>
        </div>

        <div className="feed__row__two">
          <span className="feed__card__label">Due date:</span>
          <span className="feed__card__date">{this.props.date}</span>
        </div>

        <div className="feed__row__three">
          <Logo source={this.props.logo} height={"24px"} />
          <span className="feed__card__name">{this.props.name}</span>
          <div className="feed__push">
            {this.props.editMode ? (
              <div className="feed__card__icons">
                <div className="feed__card__circles">
                  <Circle color={colors.secondary1} size={12} />
                  <Circle color={colors.primary} size={12} />
                </div>
                <div className="feed__card__edit__icons">
                  <MdEdit />
                  <MdDelete />
                </div>
              </div>
            ) : (
              ""
            )}
            <Label
              text={this.props.status}
              color={this._getColorFromStatus()}
            />
          </div>
        </div>
      </div>
    );
  }
}
