import React, { Component } from "react";
import { colors } from "../../../lib/theme";

import "./donut.scss";

import {
  PieChart,
  Pie,
  Cell,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

// TODO: from props
const data = [
  { name: "Active", value: 300 },
  { name: "Completed", value: 650 },
  { name: "Ended", value: 100 },
];
const COLORS = [colors.secondary1, colors.primary, colors.secondary2];

interface DonutGraphState {
  activeIndex: number;
}

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    percent,
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        fontSize={"2rem"}
      >
        {`${Math.round(percent * 100)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export class DonutGraph extends Component<{}, DonutGraphState> {
  readonly state = {
    activeIndex: 1,
  };
  onPieEnter = (data: any, index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ResponsiveContainer width="99%" height="85%">
        <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={60}
            outerRadius={67}
            paddingAngle={0}
            cx="25%"
            cy="36%"
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={this.onPieEnter}
            labelLine={false}
            blendStroke={true}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="right"
            iconType="circle"
            iconSize={7}
            wrapperStyle={{ right: "1.5rem" }}
            layout="vertical"
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
