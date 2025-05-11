import React, { useEffect, useState } from "react";

const sections = [
  {
    title: "DpBoss Net Weekly Patti Or Penal Chart From 05-05-2024 To 11-05-2025 For Kalyan, Milan, Kalyan Night, Rajdhani, Time, Main Bazar, Mumbai Royal Night",
    content: [
      "1=>100-678-128-489",
      "2=>129-570-660-138",
      "3=>256-229-157-670",
      "4=>149-455-257-789",
      "5=>249-168-357-339",
      "6=>169-457-556-330",
      "7=>269-133-467-890",
      "8=>378-288-134-350",
      "9=>478-559-568-126",
      "0=>235-127-668-118"
    ]
  },
  {
    title: "DpBoss Net Weekly Line Open Or Close From 05-05-2025 To 11-05-2025 For Kalyan, Milan, Kalyan Night, Rajdhani, Time, Main Bazar, Mumbai Royal Night",
    content: [
      "Mon. 1-6-5-0",
      "Tue. 4-9-3-8",
      "Wed. 2-7-5-0",
      "Thu. 3-8-4-9",
      "Fri. 1-6-2-7",
      "Sat. 4-9-5-0",
      "Sun. 1-6-3-8"
    ]
  },
  {
    title: "DpBoss Net Weekly Jodi Chart From 05-05-2025 To 11-05-2025 For Kalyan Milan Kalyan Night, Rajdhani Time, Main Bazar, Mumbai Royal Night Market",
    content: [
      "21 26 71 76",
      "33 38 83 88",
      "40 45 90 95",
      "14 19 64 69",
      "05 00 50 55",
      "43 48 84 34"
    ]
  }
];

const colorClasses = ["bg-red-100", "bg-blue-100", "bg-green-100", "bg-blue-100"];

export default function DpbossChart() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colorClasses.length);
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 space-y-6">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className="border-2 border-red-700 rounded-md shadow-md overflow-hidden"
        >
          <hr className="border-t-2 border-red-700" />
          <div className="bg-red-700 text-white italic font-semibold p-2 text-center text-lg">
            {section.title}
          </div>

          <div
            className={`p-4 text-center text-red-800 font-medium space-y-2 ${colorClasses[colorIndex]}`}
          >
            {section.content.map((line, i) => (
              <div key={i}>
                <p>{line}</p>
                {i < section.content.length - 1 && (
                  <hr className="my-2 border-t-2 border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
