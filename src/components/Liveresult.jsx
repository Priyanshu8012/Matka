import React from 'react';

const LiveResults = () => {
    const results = [
        { title: "KALYAN NIGHT", numbers: "135-90-235" },
        { title: "MAIN BAZAR", numbers: "347-44-590" },
        { title: "RAJDHANI NIGHT", numbers: "225-96-240" },
        { title: "RATAN KHATRI", numbers: "229-32-110" },
        { title: "MAIN MUMBAI RK", numbers: "129-28-558" },
        { title: "ROSE BAZAR NIGHT", numbers: "588-12-147" },

    ];

    // Function to refresh the entire page
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-orange-200">
            <div className="mt-1 space-y-4">
                {/* Live Result Header */}
            <div className="bg-pink-500 text-white text-center py-2 rounded-xl shadow-md">
                🌧️ <span className="font-bold">LIVE RESULT</span> 🌧️
            </div>
                {results.map((result, index) => (
                    <div key={index} className="bg-orange-100 border-2 border-red-400 p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-blue-900 font-bold text-xl italic">{result.title}</h2>
                        <p className="text-pink-700 text-lg italic mt-1">{result.numbers}</p>
                        <div className="flex justify-center mt-2">
                            <button
                                className="bg-purple-600 text-white px-6 py-1 rounded-md shadow-md hover:bg-purple-700"
                                onClick={handleRefresh} // Refresh page on click
                            >
                                Refresh
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveResults;