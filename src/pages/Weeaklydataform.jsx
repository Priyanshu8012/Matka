import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiCopy } from 'react-icons/fi'; // Importing the copy icon

const initialData = {
  weeklyPattiPanel: [
    '220-689-678-489',
    '237-989-228-156',
    '238-256-409-599',
    '158-338-455-699',
    '258-900-267-339',
    '123-259-240-367',
    '359-779-666-467',
    '990-368-408-134',
    '667-289-379-469',
    '668-235-389-145',
  ],
  weeklyLineOpen: [
    '1-6-3-8',
    '2-7-4-9',
    '5-0-3-8',
    '4-9-2-7',
    '1-6-3-8',
    '2-7-4-9',
    '1-6-3-8',
  ],
  weeklyJodiChart: [
    '14 19 64 69',
    '20 25 70 75',
    '5 56 65 60',
    '92 97 77 72',
    '12 14 17 19',
    '34 39 32 37',
  ],
};

const WeeklyDataForm = () => {
  const [data, setData] = useState(initialData);

  // Handle input change for Weekly Patti Panel
  const handleInputChange = (section, index, value) => {
    const updatedSection = [...data[section]];
    updatedSection[index] = value;
    setData({ ...data, [section]: updatedSection });
  };

  // Function to copy text to clipboard
  const handleCopy = (value) => {
    navigator.clipboard.writeText(value).then(() => {
      toast.success('Copied to clipboard!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Show toast notification
    toast.success('Data successfully updated!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-6xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Weekly Data Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Weekly Patti Panel */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Weekly Patti Panel
            </h3>
            <div className="grid grid-cols-1 gap-y-4">
              {data.weeklyPattiPanel.map((value, index) => (
                <div key={`weeklyPattiPanel-${index}`} className="flex items-center gap-4">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      handleInputChange('weeklyPattiPanel', index, e.target.value)
                    }
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(value)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiCopy size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Line Open */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Weekly Line Open
            </h3>
            <div className="grid grid-cols-1 gap-y-4">
              {data.weeklyLineOpen.map((value, index) => (
                <div key={`weeklyLineOpen-${index}`} className="flex items-center gap-4">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      handleInputChange('weeklyLineOpen', index, e.target.value)
                    }
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(value)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiCopy size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Jodi Chart */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Weekly Jodi Chart
            </h3>
            <div className="grid grid-cols-1 gap-y-4">
              {data.weeklyJodiChart.map((value, index) => (
                <div key={`weeklyJodiChart-${index}`} className="flex items-center gap-4">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      handleInputChange('weeklyJodiChart', index, e.target.value)
                    }
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(value)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiCopy size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-16 py-3 text-lg font-semibold rounded-full hover:shadow-lg hover:scale-105 transform transition-all duration-200"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default WeeklyDataForm;
