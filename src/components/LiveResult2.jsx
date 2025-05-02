import React from 'react';

const LiveResults = () => {
    const results = [
        { title: "KAALI", numbers: "269-7" },
        { title: "BOMBAY NIGHT", numbers: "238-38-558" },
        { title: "KALYAN GOLD NIGHT", numbers: "246-2" },
        { title: "MAHARANI NIGHT", numbers: "236-12-147" },
        { title: "PUNA NIGHT [ main ]", numbers: "349-6" },
        { title: "PUNA NIGHT", numbers: "480-2" },
        { title: "RAJDHANI SUNDAY", numbers: "359-7" },
        { title: "SITARA BAZAR", numbers: "Coming Soon.." },
    ];

    // Function to refresh the entire page
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-orange-200">
            <div className="mt-1 space-y-4">
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
