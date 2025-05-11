import React from "react";

const tableData = [
  {
    day: "सोम",
    col1: ["3", "445", "36"],
    col2: ["6", "169", "63"],
    col3: ["8", "990", "89"],
    col4: ["9", "360", "98"],
  },
  {
    day: "मंगल",
    col1: ["3", "148", "34"],
    col2: ["4", "158", "43"],
    col3: ["5", "690", "56"],
    col4: ["6", "556", "65"],
  },
  {
    day: "बुध",
    col1: ["0", "127", "05"],
    col2: ["5", "339", "50"],
    col3: ["8", "189", "89"],
    col4: ["9", "568", "98"],
  },
  {
    day: "गुरु",
    col1: ["2", "246", "25"],
    col2: ["5", "168", "52"],
    col3: ["6", "222", "67"],
    col4: ["7", "557", "76"],
  },
  {
    day: "शुक्र",
    col1: ["1", "560", "16"],
    col2: ["6", "259", "61"],
    col3: ["8", "260", "89"],
    col4: ["9", "568", "98"],
  },
];

const NightBazarTable = () => {
  return (
    <div className="mt-6 overflow-x-auto bg-yellow-400 border-2 border-black text-center font-semibold">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr>
            <th
              colSpan="13"
              className="border border-red-500 px-4 py-2 bg-yellow-400 text-blue-800 text-center text-lg"
            >
              KALYAN NIGHT / MAIN BAZAR
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
    </div>
  );
};

export default NightBazarTable;
