import React, { Component } from "react";
import "./donut.scss";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 900 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export class DonutGraph extends Component {
  render() {
    return (
      <ResponsiveContainer width="99%" height="87%">
        <PieChart margin={{ top: 20, right: 5, left: -20, bottom: 5 }}>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={60}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={0}
          >
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
