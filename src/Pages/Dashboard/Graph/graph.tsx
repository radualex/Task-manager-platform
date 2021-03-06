import React, { Component } from "react";
import "./graph.scss";

import { Filter } from "../../../Components/Filter/filter";
import { Separator } from "../../../Components/Separator/separator";

import AreaGraph from "./Area/area";
import DonutGraph from "./Donut/donut";
import { Donut } from "../../../Model/donut";
import { Area } from "../../../Model/area";
import { Card } from "../../../Model/card";
import { getDayFromToday } from "../../../lib/utility";

interface GraphProps {
  text: string;
  options: Array<string>;
  type: string;
  cards: Array<Card>;
}

interface GraphState {
  data: Donut | [Area];
}

export class Graph extends Component<GraphProps, GraphState> {
  readonly state = {
    data: undefined,
  };

  componentDidMount() {
    let data: any;
    if (this.props.type === "area") {
      data = this._getAreaData();
    } else {
      data = this._getDonutData();
    }

    this.setState({ data });
  }

  _getDonutData() {
    const activeTasks = this.props.cards.filter(
      (card) => card.status === "Active"
    ).length;
    const completedTasks = this.props.cards.filter(
      (card) => card.status === "Completed"
    ).length;
    const endedTasks = this.props.cards.filter(
      (card) => card.status === "Ended"
    ).length;

    return new Donut(activeTasks, completedTasks, endedTasks);
  }

  _getAreaData() {
    return [
      new Area(getDayFromToday(0), 50),
      new Area(getDayFromToday(6), 60),
      new Area(getDayFromToday(22), 25),
      new Area(getDayFromToday(29), 80),
    ];
  }

  render() {
    const classType = this.props.type === "area" ? "area" : "donut";
    return (
      <div className={`graph ${classType}`}>
        <div className="graph__header">
          <h1 className="graph__header__text">{this.props.text}</h1>
          <Filter options={this.props.options} />
        </div>
        <Separator margin={"1.3rem -1.5rem 0 -1.5rem"} />
        {typeof this.state.data === "undefined" ? (
          ""
        ) : this.props.type === "area" ? (
          <AreaGraph areaModels={this.state.data} />
        ) : (
          <DonutGraph donutModel={this.state.data} />
        )}
      </div>
    );
  }
}
