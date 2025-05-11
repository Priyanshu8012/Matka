import React from "react";
import Dp from './Dpbossresult2'
export default function MainStarlineTable() {
  const data = [
    { time: "09:05 AM", result: "890-7" },
    { time: "10:05 AM", result: "" },
    { time: "11:05 AM", result: "" },
    { time: "12:05 PM", result: "" },
    { time: "01:05 PM", result: "" },
    { time: "02:05 PM", result: "" },
    { time: "03:05 PM", result: "" },
    { time: "04:05 PM", result: "" },
    { time: "05:05 PM", result: "" },
    { time: "06:05 PM", result: "" },
    { time: "07:05 PM", result: "" },
    { time: "08:05 PM", result: "" },
  ];

  const left = data.slice(0, 6);
  const right = data.slice(6);

  return (
    <div className="bg-purple-100 p-2 rounded-t-3xl border border-red-300 shadow-md font-sans text-sm">
      {/* Z-pattern top with centered support email */}
      <div className="w-full bg-purple-100 flex justify-center items-center py-2 relative">
        <div className="text-[15px] italic text-black font-medium">
          Email for any inquiries or support:{" "}
          <span className="text-orange-600 font-bold underline bg-yellow-300 px-2 py-1 rounded-full shadow-md">
            support@dpboss.net
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="bg-yellow-400 mt-2 py-2 font-extrabold text-lg rounded-full text-center uppercase shadow-inner border border-yellow-600 tracking-wide">
        Main Starline
      </div>

      {/* Table */}
      <div className="grid grid-cols-2 text-center border border-red-500 mt-2 text-[14px] font-semibold rounded-sm overflow-hidden">
        {/* Header Row */}
        <div className="grid grid-cols-2 bg-red-100 text-black border-b border-red-500">
          <div className="border-r border-red-500 italic py-2">Time</div>
          <div className="italic py-2">Result</div>
        </div>
        <div className="grid grid-cols-2 bg-red-100 text-black border-b border-red-500">
          <div className="border-r border-red-500 italic py-2">Time</div>
          <div className="italic py-2">Result</div>
        </div>

        {/* Data Rows */}
        {left.map((item, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-2 bg-orange-100 border-t border-red-500">
              <div className="border-r border-red-500 italic py-2">{item.time}</div>
              <div className="italic py-2">{item.result}</div>
            </div>
            <div className="grid grid-cols-2 bg-orange-100 border-t border-red-500">
              <div className="border-l border-r border-red-500 italic py-2">{right[index]?.time}</div>
              <div className="italic py-2">{right[index]?.result}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Dp />
    </div>
  );
}
