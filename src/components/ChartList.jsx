import React from "react";
import PanelChartList from "./PanelChartList";

const chartNames = [
  "Time Chart",
  "Sridevi Chart",
  "Kalyan Morning Chart",
  "Madhuri Chart",
  "Kalyan Chart",
  "Sridevi Night Chart",
  "Kalyan Night Chart",
  "Old Main Mumbai Chart",
  "Main Bazar Chart",
  "Milan Morning Chart",
  "Milan Day Chart",
  "Milan Night Chart",
  "Madhuri Night Chart",
  "Madhur Morning Chart",
  "Madhur Day Chart",
  "Madhur Night Chart",
  "Rajdhani Night Chart",
];

const ChartList = () => {
  return (
    <div className=" bg-orange-100 p-2">
      <div className="w-full border border-pink-600 rounded-md overflow-hidden">
        <div className="bg-pink-600 text-white text-center py-2 font-bold italic text-lg border-b border-pink-700 rounded-t-md">
          SATTA MATKA JODI CHART
        </div>
        <ul className="bg-orange-100 text-center text-blue-800 font-medium">
          {chartNames.map((name, idx) => (
            <li
              key={idx}
              className="border border-purple-700 py-1 hover:bg-yellow-300 cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <PanelChartList />
    </div>
  );
};

export default ChartList;
