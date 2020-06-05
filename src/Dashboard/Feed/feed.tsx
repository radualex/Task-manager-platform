import React, { Component } from "react";
import Moment from "react-moment";
import * as moment from "moment";
import withResponsiveness, {
  ResponsivenessProps,
} from "../../lib/HOC/withResponsiveness";

import "./feed.scss";

import { ProgressBar } from "./ProgressBar/progressBar";
import { Filter } from "../../Filter/filter";
import { WeekklyCalendar } from "./WeeklyCalendar/weeklyCalendar";
import { Separator } from "../../Separator/separator";
import { Card } from "./Card/card";

import ProfileLogo from "../../lib/assets/profile.png";

interface FeedState {
  options: Array<string>;
  completedTasks?: number;
  maximumTasks?: number;
  cardsToShow: number;
  cardsWhenShowMore: number;
  cardData: Array<Object>;
}

// TODO: data should be obtained from api.
// TODO: the progress bar needs to be updated based on the data after filter is set.
class Feed extends Component<ResponsivenessProps, FeedState> {
  readonly state = {
    completedTasks: -1,
    maximumTasks: -1,
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

  componentDidMount() {
    this._calculateTasks();
  }

  _calculateTasks() {
    const completedTasks = this.state.cardData.filter(
      (card) => card.status === "Ended"
    ).length;
    const allTasks = this.state.cardData.length;

    this.setState({
      completedTasks: completedTasks,
      maximumTasks: allTasks,
    });
  }

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
    this.setState({
      cardsToShow: this.state.cardsToShow + this.state.cardsWhenShowMore,
    });
  };

  _handleDayChanged = (day: string, dayOfWeek: string) => {
    console.log(day);
    console.log(dayOfWeek);

    // TODO: filter cardData for 'day'
  };

  render() {
    const isMobile = this.props.isMobile;
    const completedTasks = this.state.completedTasks;
    const allTasks = this.state.maximumTasks;
    const taskWord = completedTasks === 1 ? "task" : "tasks";

    return (
      <div className="feed">
        <div className="feed__progress">
          <div className="feed__header">
            <span className="feed__taskCompleted">
              {isMobile
                ? `${completedTasks} out of ${allTasks}`
                : `${completedTasks} ${taskWord} completed out of ${allTasks}`}
            </span>
            <Filter options={this.state.options} />
          </div>
          <ProgressBar progress={this._calculateProgress()} />
          <Moment className="feed__today" format="DD MMM, dddd"></Moment>
        </div>
        {/* TODO: show only todays tasks. */}
        <WeekklyCalendar dayChanged={this._handleDayChanged} />
        <Separator margin={"0px -1.5rem"} />
        <div className="feed__cards disable-scrollbars">
          {this.state.cardData
            .slice(0, this.state.cardsToShow)
            .map((item, index) => (
              <Card
                key={`card-${index} `}
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

export default withResponsiveness(Feed);
