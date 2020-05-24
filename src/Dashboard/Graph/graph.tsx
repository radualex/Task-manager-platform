import React, { Component } from "react";
import "./graph.scss";

import { Filter } from "../../Filter/filter";
import { Separator } from "../../Separator/separator";

import { AreaGraph } from "./Area/area";
import { DonutGraph } from "./Donut/donut";

interface GraphProps {
  text: string;
  options: Array<string>;
  type: string;
}

export class Graph extends Component<GraphProps> {
  render() {
    return (
      <div className="graph">
        <div className="graph__header">
          <h1 className="graph__header__text">{this.props.text}</h1>
          <Filter options={this.props.options} />
        </div>
        <Separator margin={"1.3rem -1.5rem 0 -1.5rem"} />
        {/* add D3 graph here based on type from props */}
        {this.props.type === "area" ? <AreaGraph /> : <DonutGraph />}
      </div>
    );
  }
}
