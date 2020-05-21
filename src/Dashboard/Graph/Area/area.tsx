import React, { Component } from "react";
import "./area.scss";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { date: "1 Dec", deals: 50 },
  { date: "8 Dec", deals: 170 },
  { date: "16 Dec", deals: 65 },
  { date: "31 Dec", deals: 165 },
];

export class AreaGraph extends Component {
  render() {
    return (
      <AreaChart
        width={400}
        height={230}
        data={data}
        margin={{ top: 50, right: 10, left: 10, bottom: 10 }}
      >
        <defs>
          <linearGradient
            id="colorUv"
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            spreadMethod="reflect"
          >
            <stop offset="0" stopColor="#8884d8" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="7 7" />
        <XAxis dataKey="date" />
        <YAxis tick={true} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="deals"
          stroke="#8884d8"
          fill="url(#colorUv)"
          strokeWidth="2"
        />
      </AreaChart>
    );
  }
}
