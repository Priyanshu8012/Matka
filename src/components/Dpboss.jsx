import React from 'react';
import deityImage from '../assets/laxmiji.jpeg';
import LiveResults from './Liveresult';
import LiveResult from './LiveResult2';
import MatkaBookingPage from './Matkabooking';
import Fast from './Fast';

const DpBossClone = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100 min-h-screen p-6 space-y-4">
      
      {/* Header */}
      <div className="rounded-2xl p-6 text-center bg-gradient-to-r from-red-500 to-pink-500 shadow-md">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md tracking-wide italic">
          SATTA <span className="text-yellow-200">MATKA ONLINE</span>
        </h1>
      </div>

      {/* Welcome */}
      <div className="rounded-2xl p-4 text-center bg-white border-4 border-pink-400 shadow-sm">
        <p className="text-black font-semibold text-xl">
          🎉 Welcome to Satta Matka International – Get Fast Results Instantly 🎯
        </p>
      </div>

      {/* Deity Section */}
      <div className="flex items-center gap-4 border-4 border-yellow-400 bg-white p-4 rounded-2xl shadow-lg">
        <img
          src={deityImage}
          alt="Deity"
          className="w-24 h-24 border-4 border-pink-500 rounded-full shadow-md"
        />
        <p className="italic text-gray-700 text-sm leading-relaxed">
          <span className="font-bold text-black text-base">
            Satta Matka | Kalyan Matka Result
          </span><br />
          India's No.1 Matka site brings you top guessing, fast results, and market updates. Get instant tips and Jodi predictions from the best guessers of Kalyan, Rajdhani, Milan, and Madhur.
        </p>
      </div>

      {/* Lucky Number */}
      <div className="text-center py-3 rounded-2xl bg-gradient-to-r from-pink-600 to-red-500 text-white font-bold text-2xl shadow-lg">
        🎲 Today’s Lucky Number
      </div>

      {/* Golden Ank & Final Ank */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Golden Ank */}
        <div className="bg-gradient-to-bl from-yellow-200 to-orange-200 p-4 rounded-2xl text-center shadow">
          <h2 className="text-blue-800 font-bold text-lg mb-2">🌟 Golden Ank</h2>
          <p className="text-black text-xl">4 - 9 - 1 - 6</p>
        </div>

        {/* Final Ank with centered scrolling text */}
        <div className="bg-gradient-to-bl from-yellow-200 to-orange-200 p-4 rounded-2xl text-center shadow relative h-28 overflow-hidden">
          <h2 className="text-blue-800 font-bold text-lg mb-2">🔥 Final Ank</h2>
          <div className="overflow-hidden h-16 relative flex justify-center items-center">
            <div className="absolute animate-scrollUp text-black text-base font-medium text-center space-y-2">
              <p>OLD MAIN MUMBAI - 4</p>
              <p>MADHUR DAY - 4</p>
              <p>MADHUR NIGHT - 4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Animation */}
      <style>
        {`
          @keyframes scrollUp {
            0% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(-100%);
            }
          }

          .animate-scrollUp {
            animation: scrollUp 6s linear infinite;
          }
        `}
      </style>

      {/* Components */}
      <LiveResults />
      <LiveResult />
      <MatkaBookingPage />
      <Fast />
    </div>
  );
};

export default DpBossClone;
