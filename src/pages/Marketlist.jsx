import React, { useState } from 'react';

const marketData = [
  {
    id: 1,
    name: 'MILAN MORNING',
    userName: 'User 1',
    startTime: '2025-04-20 10:30:00',
    endTime: '2025-04-20 11:30:00',
    type: 'Manual',
    orderBy: 7,
    status: 'Active',
  },
  {
    id: 2,
    name: 'SRIDEVI',
    userName: 'User 2',
    startTime: '2025-04-20 11:35:00',
    endTime: '2025-04-20 12:35:00',
    type: 'Manual',
    orderBy: 9,
    status: 'Active',
  },
  // Add more market data as needed
];

const MarketList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [markets, setMarkets] = useState(marketData);

  // Handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filteredMarkets = marketData.filter((market) =>
      market.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setMarkets(filteredMarkets);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-7xl border border-gray-200">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Market List</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by market name..."
              className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none w-80"
            />
            <button className="bg-pink-500 text-white px-6 py-2 text-sm font-semibold rounded-md hover:bg-pink-600 transition-all">
              Add Market
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 border-b">Market Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 border-b">User Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 border-b">Start Time</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 border-b">End Time</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 border-b">Type</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 border-b">Order By</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 border-b">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 border-b">Add Result</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {markets.map((market) => (
                <tr key={market.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800 border-b">{market.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-b">{market.userName}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-b">{market.startTime}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-b">{market.endTime}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-b">{market.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-b">{market.orderBy}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-b">
                    <span
                      className={`bg-green-500 text-white rounded-full px-4 py-1 text-xs font-medium`}
                    >
                      {market.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-b text-center">
                    <button className="bg-pink-500 text-white px-4 py-1 text-xs font-medium rounded-md hover:bg-pink-600 transition-all">
                      Add Result
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-b flex items-center justify-center space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-1 text-xs font-medium rounded-md hover:bg-blue-600 transition-all">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-4 py-1 text-xs font-medium rounded-md hover:bg-red-600 transition-all">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-between items-center mt-8">
          <button className="text-blue-500 hover:underline text-sm">Previous</button>
          <button className="text-blue-500 hover:underline text-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

export default MarketList;