import React, { Component } from "react";
import Moment from "react-moment";
import * as moment from "moment";
import "./feed.scss";

import { ProgressBar } from "./ProgressBar/progressBar";
import { Filter } from "../../Filter/filter";
import { WeekklyCalendar } from "./WeeklyCalendar/weeklyCalendar";
import { Separator } from "../../Separator/separator";
import { Card } from "./Card/card";

import ProfileLogo from "../../lib/assets/profile.png";

interface FeedState {
  options: Array<string>;
  completedTasks: number;
  maximumTasks: number;
}

// TODO: the progress bar needs to be updated based on the data after filter is set.
export class Feed extends Component<{}, FeedState> {
  readonly state = {
    completedTasks: 8,
    maximumTasks: 10,
    options: ["This week", "Next week", "Next month"],
  };

  _calculateProgress() {
    return (this.state.completedTasks / this.state.maximumTasks) * 100;
  }

  // TODO: date should be propagated from parent through props
  _formattedDateForCard() {
    let today = moment();

    const date = today.format("DD");
    const month = today.format("MMM");
    const year = today.format("YYYY");
    return `${month} ${date}, ${year}`;
  }

  // TODO: card data should be dynamic and do a map
  render() {
    return (
      <div className="feed">
        <div className="feed__progress">
          <div className="feed__header">
            <span className="feed__taskCompleted">
              {this.state.completedTasks} task completed out of{" "}
              {this.state.maximumTasks}
            </span>
            <Filter options={this.state.options} />
          </div>
          <ProgressBar progress={this._calculateProgress()} />
          <Moment className="feed__today" format="DD MMM, dddd"></Moment>
        </div>
        <WeekklyCalendar />
        <Separator margin={"0px -1.5rem"} />
        <div className="feed__cards">
          <Card
            task={"Send benefit review by Sunday"}
            date={this._formattedDateForCard()}
            type={"Reminder"}
            status={"Completed"}
            logo={ProfileLogo}
            name={"Radu-Alexandru Stoica"}
            editMode={false}
          />
          <Card
            task={"Send benefit review by Sunday"}
            date={this._formattedDateForCard()}
            type={"Call"}
            status={"Ended"}
            logo={ProfileLogo}
            name={"Radu-Alexandru Stoica"}
            editMode={true}
          />
          <Card
            task={"Send benefit review by Sunday"}
            date={this._formattedDateForCard()}
            type={"Event"}
            status={"Completed"}
            logo={ProfileLogo}
            name={"Radu-Alexandru Stoica"}
            editMode={false}
          />
        </div>
        <span className="feed__more">Show more</span>
      </div>
    );
  }
}
