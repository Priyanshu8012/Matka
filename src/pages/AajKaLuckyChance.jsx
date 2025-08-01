import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FiCopy } from 'react-icons/fi';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AajKaLuckyChance = () => {
  const [luckyNumber, setLuckyNumber] = useState('');
  const [chance, setChance] = useState('');
  const navigate = useNavigate();
const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
  axios
    .get(`${API_URL}/api/luckychance`)
    .then((res) => {
      const data = res.data || {};
      setLuckyNumber(data.lucky_number ?? '');
      setChance(data.chance ?? '');
    })
    .catch(() => toast.error('डेटा लोड नहीं हो सका'));
}, []);

const handleUpdate = (e) => {
  e.preventDefault();
  axios
    .put(`${API_URL}/api/luckychance`, {
      lucky_number: luckyNumber,
      chance: chance,
    })
    .then(() => toast.success('डेटा सफलतापूर्वक अपडेट किया गया!'))
    .catch(() => toast.error('अपडेट विफल रहा'));
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-10 px-4 flex flex-col items-center justify-start">
      
      {/* Dashboard Button */}
      <div className="w-full max-w-2xl flex justify-end mb-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition font-semibold"
        >
          🏠 Go to Dashboard
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-2xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          आज का लकी चांस
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="space-y-6">

            {/* Lucky Number */}
            <div className="flex items-center gap-4">
              <label className="w-32 text-gray-800 font-medium">
                लकी नंबर
              </label>
              <input
                type="text"
                value={luckyNumber}
                onChange={(e) => setLuckyNumber(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm"
                placeholder="लकी नंबर दर्ज करें"
              />
              <button
                type="button"
                onClick={() => handleCopy(luckyNumber)}
                className="text-gray-500 hover:text-gray-800"
                title="कॉपी करें"
              >
                <FiCopy size={20} />
              </button>
            </div>

            {/* Chance */}
            <div className="flex items-center gap-4">
              <label className="w-32 text-gray-800 font-medium">
                चांस
              </label>
              <input
                type="text"
                value={chance}
                onChange={(e) => setChance(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm"
                placeholder="चांस दर्ज करें"
              />
              <button
                type="button"
                onClick={() => handleCopy(chance)}
                className="text-gray-500 hover:text-gray-800"
                title="कॉपी करें"
              >
                <FiCopy size={20} />
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-16 py-3 text-lg font-semibold rounded-full hover:scale-105 transition"
            >
              अपडेट करें
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default AajKaLuckyChance;
