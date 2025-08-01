import React from "react";
import { useNavigate } from "react-router-dom";

const CurrentResult = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-6xl">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Current Result</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={new Date().toISOString().split("T")[0]}
              readOnly
              className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200"
            >
              Go to Dashboard
            </button>
          </div>
        </div>

        {/* Table Section */}
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Ankado Date</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Ankado Open</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Ankado Close</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Figure Open</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Figure Close</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Jodi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="7"
                className="border border-gray-300 px-4 py-6 text-center text-gray-500"
              >
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination Section */}
        <div className="flex justify-between items-center mt-6">
          <button className="text-blue-600 hover:text-blue-700 font-semibold focus:outline-none">
            Previous
          </button>
          <button className="text-blue-600 hover:text-blue-700 font-semibold focus:outline-none">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentResult;
