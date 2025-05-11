import React from "react";

const GameZone = () => {
  return (
    <div className="min-h bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white py-3 px-6 rounded-t-lg shadow-lg mt-2">
        <h1 className="text-2xl font-bold text-center">Matka Jodi List</h1>
      </header>

      {/* Content Section */}
      <section className="container mx-auto mt-4 px-4">
        <div className="bg-orange-100 border border-orange-300 rounded-lg shadow-lg">
          <ul className="space-y-3 py-4">
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              Matka Jodi Count Chart
            </li>
            <hr className="border-t-2 border-red-500" />
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              Dhanvarsha Daily Fix Open To Close
            </li>
            <hr className="border-t-2 border-red-500" />
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              Matka Jodi Family Chart
            </li>
            <hr className="border-t-2 border-red-500" />
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              Penal Count Chart
            </li>
            <hr className="border-t-2 border-red-500" />
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              Penal Total Chart
            </li>
            <hr className="border-t-2 border-red-500" />
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              All 220 Card List
            </li>
            <hr className="border-t-2 border-red-500" />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GameZone;
