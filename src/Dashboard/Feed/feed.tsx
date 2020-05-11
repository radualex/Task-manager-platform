import React, { Component } from "react";
import Moment from "react-moment";
import "./feed.scss";

import { ProgressBar } from "./ProgressBar/progressBar";
import { Filter } from "../../Filter/filter";

interface FeedProps {
  completedTasks: number;
  maximumTasks: number;
}

interface FeedState {
  progress: number;
}

export class Feed extends Component<FeedProps, FeedState> {
  readonly state = {
    progress: this._calculateProgress(),
  };

  _calculateProgress() {
    return (this.props.completedTasks / this.props.maximumTasks) * 100;
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
              {this.props.completedTasks} task completed out of{" "}
              {this.props.maximumTasks}
            </span>
            <Filter />
          </div>
          <ProgressBar progress={this.state.progress} />
          <Moment className="feed__today" format="DD MMM, dddd"></Moment>
          {/* <span className="feed__today">{this._formattedTodayDate()}</span> */}
        </div>
        {/* <div className="calendar"></div> */}
      </div>
    );
  }
}
