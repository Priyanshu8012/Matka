import React from "react";

const chartNames = [
  "Time Panel Chart",
  "Sridevi Panel Chart",
  "Kalyan Morning Panel Chart",
  "Madhuri Penal Chart",
  "Padmavathi Penal Chart",
  "Kalyan Penal Chart",
  "Sridevi Night Penal Chart",
  "Kalyan Night Penal Chart",
  "Old Main Mumbai Panel Chart",
  "Main Bazar Penal Chart",
  "Milan Morning Panel Chart",
  "Milan Day Penal Chart",
  "Milan Night Penal Chart",
  "Madhuri Night Panel Chart",
  "Rajdhani Night Panel Chart",
  "Madhur Morning Day Chart",
  "Madhur Day Panel Chart"
];

const PanelChartList = () => {
  return (
    <div className="bg-orange-100 p-2">
      <div className="w-full border border-pink-600 rounded-md overflow-hidden">
        <div className="bg-pink-600 text-white text-center py-2 font-bold italic text-lg border-b border-pink-700 rounded-t-md">
          MATKA PANEL CHART
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
    </div>
  );
};

export default PanelChartList;
