import React from "react";

export default function MainStarlineTable() {
  const data = [
    { time: "09:30 AM", result: "560-1" },
    { time: "10:30 AM", result: "155-1" },
    { time: "11:30 AM", result: "267-5" },
    { time: "12:30 PM", result: "178-6" },
    { time: "01:30 PM", result: "117-9" },
    { time: "02:30 PM", result: "235-0" },
    { time: "03:30 PM", result: "458-7" },
    { time: "04:30 PM", result: "690-5" },
    { time: "05:30 PM", result: "689-3" },
    { time: "06:30 PM", result: "223-7" },
    { time: "07:30 PM", result: "890-7" },
    { time: "08:30 PM", result: "478-9" },
  ];

  const left = data.slice(0, 6);
  const right = data.slice(6);

  return (
    <div className="bg-pink-100 p-2 rounded-t-3xl border border-red-300 shadow-md font-sans text-sm">
      {/* Title */}
      <div className="bg-pink-500 mt-2 py-2 font-extrabold text-lg rounded-full text-center text-white uppercase shadow-inner border border-pink-600 tracking-wide">
        Mumbai Rajshree Star Line Result
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
    </div>
  );
}
