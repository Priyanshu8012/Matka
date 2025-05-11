import React from "react";
import GameZone2 from "./Gamezone2"
const GameZone = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white py-4">
        <h1 className="text-2xl font-bold text-center">DpBoss Special Game Zone</h1>
      </header>

      {/* Content Section */}
      <section className="container mx-auto mt-6 px-4">
        <div className="bg-orange-100 border border-orange-300 rounded-lg shadow-lg">
          <ul className="space-y-4 py-6">
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              Dpboss Guessing Forum (Post)
            </li>
            <hr className="border-t-2 border-gray-300" />
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              All market free fix game
            </li>
            <hr className="border-t-2 border-gray-300" />
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              Ratan Khatri Fix Panel Chart
            </li>
            <hr className="border-t-2 border-gray-300" />
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              Matka Final Number Trick Chart
            </li>
            <hr className="border-t-2 border-gray-300" />
            <li className="text-xl text-purple-800 text-center hover:text-red-600 cursor-pointer">
              EverGreen Trick Zone And Matka Tricks By DpBoss
            </li>
            <hr className="border-t-2 border-gray-300" />
          </ul>
        </div>
      </section>
      <GameZone2/>
    </div>
  );
};

export default GameZone;
