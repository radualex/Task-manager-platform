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
import { Card as CardModel } from "../../Model/card";

interface FeedProps extends ResponsivenessProps {
  cards: Array<CardModel>;
}

interface FeedState {
  options: Array<string>;
  completedTasks?: number;
  maximumTasks?: number;
  cardsToShow: number;
  cardsWhenShowMore: number;
  cardData: Array<CardModel>;
}

// TODO: data should be obtained from api.
class Feed extends Component<FeedProps, FeedState> {
  readonly state = {
    completedTasks: -1,
    maximumTasks: -1,
    options: ["This week", "Next week", "Next month"],
    cardsToShow: 3,
    cardsWhenShowMore: 3,
    cardData: new Array<CardModel>(),
  };

  componentDidMount() {
    this._calculateTasks();
    this.setState({
      cardData: this._filterCards(Number.parseInt(moment().format("DD"))),
    });
  }

  _calculateTasks() {
    const completedTasks = this.props.cards.filter(
      (card) => card.status === "Completed"
    ).length;
    const allTasks = this.props.cards.length;

    this.setState({
      completedTasks: completedTasks,
      maximumTasks: allTasks,
    });
  }

  _calculateProgress() {
    return (this.state.completedTasks / this.state.maximumTasks) * 100;
  }

  _formattedDateForCard(dateAsMoment: any) {
    let parsedDate = moment(dateAsMoment);

    const date = parsedDate.format("DD");
    const month = parsedDate.format("MMM");
    const year = parsedDate.format("YYYY");
    return `${month} ${date}, ${year}`;
  }

  _filterCards(day: number) {
    return this.props.cards.filter((card) => card.getDateAsInt() === day);
  }

  _handleShowMore = () => {
    this.setState({
      cardsToShow: this.state.cardsToShow + this.state.cardsWhenShowMore,
    });
  };

  _handleDayChanged = (day: string, dayOfWeek: string) => {
    const dayInt = Number.parseInt(day);

    this.setState({ cardData: this._filterCards(dayInt) });
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
