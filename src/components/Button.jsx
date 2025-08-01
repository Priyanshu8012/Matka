import React from 'react';

export default function App() {
  const handleMatkaPlay = () => {
    // Redirect to saionlinegame.com
    window.open('https://saionlinegame.com', '_blank');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const buttonClasses = `
    bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
    text-white font-bold px-6 py-2 rounded-full shadow-lg
    hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out
    border-2 border-white
  `;

  return (
    <div className="bg-orange-100 p-6 relative">
      {/* Fixed Action Buttons */}
      <div className="fixed bottom-4 left-4 z-50">
        <button onClick={handleMatkaPlay} className={buttonClasses}>
          Matka Play
        </button>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <button onClick={handleRefresh} className={buttonClasses}>
          REFRESH
        </button>
      </div>
    </div>
  );
}
