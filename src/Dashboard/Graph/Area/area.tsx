import React, { Component } from "react";
import { colors } from "../../../lib/theme";
import "./area.scss";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import withResponsiveness, {
  ResponsivenessProps,
} from "../../../lib/HOC/withResponsiveness";

// TODO: from props
const data = [
  { date: "1 Dec", deals: 50 },
  { date: "8 Dec", deals: 170 },
  { date: "16 Dec", deals: 65 },
  { date: "31 Dec", deals: 165 },
];

class AreaGraph extends Component<ResponsivenessProps> {
  render() {
    const isBigScreen = this.props.isBigScreen;
    const leftMargin = isBigScreen ? 0 : -20;
    const bottomMargin = isBigScreen ? 10 : 5;

    return (
      <ResponsiveContainer width="99%" aspect={isBigScreen ? 1 : 1.7}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 5, left: leftMargin, bottom: bottomMargin }}
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
              <stop
                offset="0.01%"
                stopColor={colors.primary}
                stopOpacity={0.2}
              />
              <stop offset="99.9%" stopColor={colors.neutral4} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="10 10" />
          <XAxis dataKey="date" tickMargin={15} />
          <YAxis tick={true} tickMargin={15} />
          <Legend
            verticalAlign="top"
            height={36}
            align="left"
            iconType="circle"
            iconSize={7}
            wrapperStyle={{ left: "0", top: "0" }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "1rem",
              background: "black",
              opacity: "60%",
              padding: "0.1rem 1rem",
            }}
            itemStyle={{ color: "white" }}
            labelStyle={{ display: "none" }}
          />
          <Area
            name="Closed deals"
            type="monotone"
            dataKey="deals"
            stroke="#8884d8"
            fill="url(#colorUv)"
            strokeWidth="2"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default withResponsiveness(AreaGraph);
