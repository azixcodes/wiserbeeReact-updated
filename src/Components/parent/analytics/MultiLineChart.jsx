import React from "react";
import { useParentContext } from "../../../ContextAPI/ParentContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MultiLineChart = () => {
  const { users } = useParentContext();
  const activeUser = users.filter((user) => user.isActive === true);
  const data = activeUser[0].graphData;

  return (
    <ResponsiveContainer>
      <LineChart width={800} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="assesment"
          stroke="#241763"
          strokeWidth={4}
          dot={{ fill: "white" }}
        />
        <Line
          type="monotone"
          dataKey="attendance"
          stroke="#F50788"
          strokeWidth={4}
          dot={{ fill: "white" }}
        />
        <Line
          type="monotone"
          dataKey="performance"
          stroke="#0CBA97"
          strokeWidth={4}
          dot={{ fill: "white" }}
        />

        <XAxis dataKey="month" />
        <YAxis ticks={[0, 20, 40, 60, 80, 100]} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultiLineChart;
