import React from "react";
import NightBazarTable from "./NightBazarTable";

const tableData = [
  {
    day: "सोम",
    col1: ["3", "689", "35"],
    col2: ["5", "366", "53"],
    col3: ["7", "223", "78"],
    col4: ["8", "666", "87"],
  },
  {
    day: "मंगल",
    col1: ["2", "156", "27"],
    col2: ["7", "467", "72"],
    col3: ["8", "477", "89"],
    col4: ["9", "333", "98"],
  },
  {
    day: "बुध",
    col1: ["3", "179", "37"],
    col2: ["7", "359", "73"],
    col3: ["8", "134", "89"],
    col4: ["9", "478", "98"],
  },
  {
    day: "गुरु",
    col1: ["3", "779", "35"],
    col2: ["5", "168", "53"],
    col3: ["7", "133", "79"],
    col4: ["9", "388", "97"],
  },
  {
    day: "शुक्र",
    col1: ["5", "122", "56"],
    col2: ["6", "277", "65"],
    col3: ["7", "269", "78"],
    col4: ["8", "189", "87"],
  },
  {
    day: "शनि",
    col1: ["2", "138", "25"],
    col2: ["5", "122", "52"],
    col3: ["7", "467", "79"],
    col4: ["9", "234", "97"],
  },
];

const WeeklyTable = () => {
  return (
    <div className="overflow-x-auto bg-orange-100 border-2 border-black text-center font-semibold">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr>
            <th
              colSpan="13"
              className="border border-red-500 px-4 py-2 bg-yellow-400 text-blue-800 text-center text-lg"
            >
              कल्याण
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, idx) => (
            <tr key={idx} className="bg-orange-100">
              <td className="border border-red-500 px-4 py-2">{row.day}</td>

              {[row.col1, row.col2, row.col3, row.col4].map((col, i) => (
                <React.Fragment key={i}>
                  <td className="border border-red-500 font-bold text-lg">{col[0]}</td>
                  <td className="border border-red-500">{col[1]}</td>
                  <td className="border border-red-500">{col[2]}</td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add top margin to separate the two tables */}
      <div className="mt-0">
        <NightBazarTable />
      </div>
    </div>
  );
};

export default WeeklyTable;
