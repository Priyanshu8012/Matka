import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AddDailyCharts = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [charts, setCharts] = useState([]);
  const navigate = useNavigate();


  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchCharts();
  }, []);

  const fetchCharts = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/daily-charts`);
      setCharts(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
      toast.error('Failed to fetch charts');
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFiles || selectedFiles.length === 0) {
      return toast.error('Please select files before submitting!', {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    try {
      await axios.post(`${API_URL}/api/daily-charts`, formData);
      toast.success('Files uploaded successfully!', {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
      setSelectedFiles(null);
      e.target.reset();
      fetchCharts();
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Upload failed. Try again!', {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this chart?')) return;

    try {
      await axios.delete(`${API_URL}/api/daily-charts/${id}`);
      toast.success('Chart deleted successfully!', {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
      fetchCharts();
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete chart', {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-10 px-4 flex flex-col items-center">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-4xl border border-gray-200">
        <div className="mb-6 text-right">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            🏠 Go to Dashboard
          </button>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Add Daily Charts
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block text-gray-800 font-medium mb-4">Choose files:</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-16 py-3 text-lg font-semibold rounded-full hover:shadow-lg hover:scale-105 transform transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Uploaded Charts Display */}
      <div className="mt-12 w-full max-w-5xl">
        <h3 className="text-2xl font-bold mb-6 text-center">Uploaded Charts</h3>
        {charts.length === 0 ? (
          <p className="text-center text-gray-500">No charts uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {charts.map((chart) => (
              <div
                key={chart.id}
                className="bg-white border shadow-md rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={`${API_URL}/uploads/${chart.filename}`}
                  alt={chart.filename}
                  className="w-full h-64 object-contain mb-4"
                />
                <button
                  onClick={() => handleDelete(chart.id)}
                  className="bg-red-500 text-white px-4 py-2 text-sm font-semibold rounded hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default AddDailyCharts;
