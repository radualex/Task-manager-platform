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

/**
 * @event 'day-changed' dispatched when the user clicks on a day. Details: {day, dayOfWeek}
 */
export class WeekklyCalendar extends Component<{}, WeekklyCalendarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    return (
      <div className="weeklyCalendar">
        {getWeek().map(({ day, dayOfWeek }, i) => (
          <div
            key={day}
            className={`currentDay ${
              i === this.state.activeIndex ? "selected" : ""
            }`}
            onClick={(e) => {
              this.setState({ activeIndex: i });
              dispatchEvent(
                new CustomEvent("day-changed", {
                  detail: { day, dayOfWeek },
                  bubbles: false,
                  cancelable: false,
                })
              );
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
