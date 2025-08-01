import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinalAnk = () => {
  const [ankData, setAnkData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || '';

  useEffect(() => {
    const fetchFinalAnk = async () => {
      try {
        const url = `${API_URL}/api/finalank`;
        console.log('✅ Fetching from:', url);

        const response = await axios.get(url);
        console.log('✅ API response:', response.data);

        if (Array.isArray(response.data)) {
          setAnkData(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAnkData(response.data.data);
        } else {
          console.warn('⚠️ Unexpected API format:', response.data);
          setAnkData([]);
        }
      } catch (error) {
        console.error('❌ Error fetching Final Ank:', error);
        setAnkData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFinalAnk();
  }, [API_URL]);

  return (
    <div className="bg-gradient-to-bl from-yellow-200 to-orange-200 p-4 rounded-2xl text-center shadow relative h-28 overflow-hidden">
      <h2 className="text-blue-800 font-bold text-lg mb-2">🔥 Final Ank</h2>

      <div className="overflow-hidden h-16 relative flex justify-center items-center">
        <div className="absolute animate-scrollUp text-black text-base font-medium text-center space-y-2">
          {loading ? (
            <p>Loading...</p>
          ) : ankData.length > 0 ? (
            ankData.map((item, index) => (
              <p key={index}>{`${item.label} - ${item.value}`}</p>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes scrollUp {
            0% { transform: translateY(100%); }
            100% { transform: translateY(-100%); }
          }
          .animate-scrollUp {
            animation: scrollUp 6s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FinalAnk;
