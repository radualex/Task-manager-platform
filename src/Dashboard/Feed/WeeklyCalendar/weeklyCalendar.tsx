import React, { Component } from "react";
import * as moment from "moment";
import "./weeklyCalendar.scss";

function getDayFromToday(index: number) {
  const today = moment();
  return today.add(index, "d");
}

function getWeek() {
  let days = [];
  for (let i = 0; i < 7; i++) {
    const day = getDayFromToday(i);
    days.push({
      day: day.format("DD").toString(),
      dayOfWeek: day.format("ddd").toString(),
    });
  }

  return days;
}

interface WeekklyCalendarState {
  activeIndex: number;
}

interface WeeklyCalendarProps {
  dayChanged: Function;
}

// TODO: needs props to pass a date from parent and then get the next 6 days and show those (because of the filter)
export class WeekklyCalendar extends Component<
  WeeklyCalendarProps,
  WeekklyCalendarState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  _handleClick = (index: number, day: any, dayOfWeek: any) => {
    this.setState({ activeIndex: index });
    this.props.dayChanged(day, dayOfWeek);
  };

  render() {
    return (
      <div className="weeklyCalendar">
        {getWeek().map(({ day, dayOfWeek }, i) => (
          <div
            key={day}
            className={`currentDay ${
              i === this.state.activeIndex ? "selected" : ""
            }`}
            onClick={() => {
              this._handleClick(i, day, dayOfWeek);
            }}
          >
            <span className="dayOfWeek">{dayOfWeek}</span>
            <span className="day">{day}</span>
          </div>
        ))}
      </div>
    );
  }
}
