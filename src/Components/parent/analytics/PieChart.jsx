import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const DonotChart = ({ data, COLORS }) => {
  return (
    <>
      <PieChart width={1000} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={100}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      {/* <h4 className="donotPercentage">70%</h4> */}
    </>
  );
};

export default DonotChart;
