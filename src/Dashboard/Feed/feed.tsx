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
  cardsToShow: number;
  cardsWhenShowMore: number;
  cardData: Array<Object>;
}

// TODO: data should be obtained from api.
// TODO: the progress bar needs to be updated based on the data after filter is set.
export class Feed extends Component<{}, FeedState> {
  readonly state = {
    completedTasks: 8,
    maximumTasks: 10,
    options: ["This week", "Next week", "Next month"],
    cardsToShow: 3,
    cardsWhenShowMore: 3,
    cardData: [
      {
        task: "Send benefit review by Sunday",
        date: "2020-05-27T10:00:00",
        type: "Reminder",
        status: "Completed",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: false,
      },
      {
        task: "Send benefit review by Sunday1",
        date: "2020-05-26T10:00:00",
        type: "Call",
        status: "Ended",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: true,
      },
      {
        task: "Send benefit review by Sunday2",
        date: "2020-05-25T10:00:00",
        type: "Reminder",
        status: "Completed",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: false,
      },
      {
        task: "Send benefit review by Sunday3",
        date: "2020-05-27T10:00:00",
        type: "Reminder",
        status: "Completed",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: false,
      },
      {
        task: "Send benefit review by Sunday4",
        date: "2020-05-27T10:00:00",
        type: "Reminder",
        status: "Completed",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: true,
      },
      {
        task: "Send benefit review by Sunday5",
        date: "2020-05-27T10:00:00",
        type: "Reminder",
        status: "Completed",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: false,
      },
      {
        task: "Send benefit review by Sunday6",
        date: "2020-05-27T10:00:00",
        type: "Reminder",
        status: "Completed",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: false,
      },
      {
        task: "Send benefit review by Sunday7",
        date: "2020-05-27T10:00:00",
        type: "Reminder",
        status: "Active",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: true,
      },
      {
        task: "Send benefit review by Sunday8",
        date: "2020-05-27T10:00:00",
        type: "Reminder",
        status: "Completed",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: true,
      },
      {
        task: "Send benefit review by Sunday9",
        date: "2020-05-27T10:00:00",
        type: "Reminder",
        status: "Active",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: false,
      },
      {
        task: "Send benefit review by Sunday10",
        date: "2020-05-27T10:00:00",
        type: "Reminder",
        status: "Ended",
        logo: ProfileLogo,
        name: "Radu-Alexandru Stoica",
        editMode: false,
      },
    ],
  };

  _calculateProgress() {
    return (this.state.completedTasks / this.state.maximumTasks) * 100;
  }

  _formattedDateForCard(dateString: any) {
    let parsedDate = moment(dateString);

    const date = parsedDate.format("DD");
    const month = parsedDate.format("MMM");
    const year = parsedDate.format("YYYY");
    return `${month} ${date}, ${year}`;
  }

  _handleShowMore = () => {
    // this.setState({ cardData: Utility.rotate(3, this.state.cardData) });
    this.setState({
      cardsToShow: this.state.cardsToShow + this.state.cardsWhenShowMore,
    });
  };

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
        <div className="feed__cards disable-scrollbars">
          {this.state.cardData.slice(0, this.state.cardsToShow).map((item) => (
            <Card
              task={item.task}
              date={this._formattedDateForCard(item.date)}
              type={item.type}
              status={item.status}
              logo={item.logo}
              name={item.name}
              editMode={item.editMode}
            />
          ))} 
        </div>
        {this.state.cardsToShow >= this.state.cardData.length ? (
          ""
        ) : (
          <span className="feed__more" onClick={this._handleShowMore}>
            Show more
          </span>
        )}
      </div>
    );
  }
}
