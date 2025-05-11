import React from "react";

const games = [
  {
    title: "MILAN MORNING",
    numbers: "2-7-4-9",
    series: "237-570-250-112-117",
    extras: "24-29-74-79-42-47-92-97",
  },
  {
    title: "KALYAN MORNING",
    numbers: "4-9-1-6",
    series: "599-550-245-240-358",
    extras: "41-46-91-96-14-19-64-69",
  },
  {
    title: "TIME BAZAR",
    numbers: "* * * *",
    series: "*** *** *** ***",
    extras: "*** *** *** ***",
  },
  {
    title: "MILAN DAY",
    numbers: "* * * *",
    series: "*** *** *** ***",
    extras: "*** *** *** ***",
  },
  {
    title: "KALYAN",
    numbers: "* * * *",
    series: "*** *** *** ***",
    extras: "*** *** *** ***",
  },
  {
    title: "MILAN NIGHT",
    numbers: "* * * *",
    series: "*** *** *** ***",
    extras: "*** *** *** ***",
  },
  {
    title: "KALYAN NIGHT",
    numbers: "* * * *",
    series: "*** *** *** ***",
    extras: "*** *** *** ***",
  },
  {
    title: "RAJDHANI NIGHT",
    numbers: "* * * *",
    series: "*** *** *** ***",
    extras: "*** *** *** ***",
  },
  {
    title: "MAIN BAZAR",
    numbers: "* * * *",
    series: "*** *** *** ***",
    extras: "*** *** *** ***",
  },
  {
    title: "PUNA BAZAR",
    numbers: "2-6-9-0",
    series: "138-129-150-178-135-126-389-235",
    extras: "26-29-60-69-92-96-09-06",
  },
  {
    title: "SRIDEVI NIGHT",
    numbers: "1-5-6-9",
    series: "146-230-178-478",
    extras: "11-16-55-50-66-61-99-94",
  },
  {
    title: "MAIN BAZAR MORNING",
    numbers: "3-4-6-7",
    series: "689-139-239-347-156-124-557",
    extras: "32-37-43-48-65-60-73-78",
  },
  {
    title: "PADMAVATI",
    numbers: "1-4-6-0",
    series: "560-400-123-550",
    extras: "14-43-69-04 / 1-3-4-9",
  },
  {
    title: "KARNATAKA DAY",
    numbers: "4-5-8",
    series: "130-235-456-890-350-478",
    extras: "49-47-57-59-80-89 / 0-7-9",
  },
  {
    title: "SRIDEVI",
    numbers: "3-4-7-0",
    series: "120-130-160-190",
    extras: "39-34-44-49-74-79-04-09",
  },
  {
    title: "PRABHAT",
    numbers: "1-3-6-8",
    series: "137-346-169-189-155-237-189-468",
    extras: "13-14-32-37-65-60-87-82",
  },
];

const GameZone = () => {
  return (
    <div className="bg-pink-50 min-h-screen p-4">
      <div className="bg-pink-600 text-white text-center font-semibold py-2 rounded-t-md shadow-md">
        FREE GAME ZONE OPEN-CLOSE
      </div>

      <div className="text-center text-sm font-semibold my-4 text-gray-800">
        <p>
          <span className="text-blue-700 font-semibold">✔ DATE:</span>{" "}
          11/05/2025 <br />
          <span className="text-pink-700">FREE GUESSING DAILY</span> <br />
          OPEN TO CLOSE FIX ANK
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-green-700 rounded-xl shadow hover:shadow-xl transition duration-200"
          >
            <div className="bg-green-700 text-white text-center font-semibold py-2 rounded-t-xl">
              ↪ {item.title}
            </div>
            <div className="p-4 text-center space-y-2 text-gray-800">
              <div>
                <p className="text-lg text-yellow-600 font-bold">{item.numbers}</p>
              </div>
              <hr />
              <div>
                <p className="text-sm">{item.series}</p>
              </div>
              <hr />
              <div>
                <p className="text-sm">{item.extras}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameZone;
