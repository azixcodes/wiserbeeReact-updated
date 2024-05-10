import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    { month: "Jan", percentage: 0 },
    { month: "Feb", percentage: 20 },
    { month: "Mar", percentage: 40 },
    { month: "Apr", percentage: 20 },
    { month: "May", percentage: 80 },
    { month: "Jun", percentage: 30 },
    { month: "Jul", percentage: 50 },
    { month: "Aug", percentage: 60 },
    { month: "Sep", percentage: 70 },
    { month: "Oct", percentage: 80 },
    { month: "Nov", percentage: 0 },
    { month: "Dec", percentage: 20 }, // Extra point for a closed loop
  ];

  return (
    <ResponsiveContainer>
      {" "}
      <LineChart width={800} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="percentage"
          stroke="#241763"
          strokeWidth={4}
          dot={{ fill: "white" }}
        />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="month" />
        <YAxis ticks={[0, 20, 40, 60, 80, 100]} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
