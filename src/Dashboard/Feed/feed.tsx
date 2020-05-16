import React, { Component } from "react";
import Moment from "react-moment";
import "./feed.scss";

import { ProgressBar } from "./ProgressBar/progressBar";
import { Filter } from "../../Filter/filter";
import { WeekklyCalendar } from "./WeeklyCalendar/weeklyCalendar";
import { Separator } from "../../Separator/separator";
import { Card } from "./Card/card";

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
    options: ["This week", "Next week"],
  };

  _calculateProgress() {
    return (this.state.completedTasks / this.state.maximumTasks) * 100;
  }

  _formattedTodayDate() {
    let today = new Date();

    const date = today.getDate();
    const month = today.getMonth() + 1;
    const day = today.getDay();
    return `${date} ${month}, ${day}`;
  }

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
        <Separator margin={"8px -1.5rem"} />
        <Card />
      </div>
    );
  }
}
