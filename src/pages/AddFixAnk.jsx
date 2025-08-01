import React, { useEffect, useState } from 'react';
import { FiCopy, FiTrash } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const API = `${import.meta.env.VITE_API_URL}/api/finalank`;

const FixAnkForm = () => {
  const [data, setData] = useState([]);
  const [newLabel, setNewLabel] = useState('');
  const [newValue, setNewValue] = useState('');
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data);
    } catch (err) {
      toast.error('Error fetching data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (id, newValue) => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, value: newValue } : item
    );
    setData(updated);
  };

  const handleUpdateAll = async (e) => {
    e.preventDefault();
    try {
      await Promise.all(
        data.map((item) =>
          axios.put(`${API}/${item.id}`, {
            label: item.label,
            value: item.value,
          })
        )
      );
      toast.success('All values updated successfully!');
    } catch {
      toast.error('Update failed!');
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.info('Copied!');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this entry?')) {
      await axios.delete(`${API}/${id}`);
      fetchData();
      toast.success('Deleted!');
    }
  };

  const handleAdd = async () => {
    if (!newLabel || !newValue) {
      return toast.warn('Please fill both Label and Value');
    }

    try {
      await axios.post(API, { label: newLabel, value: newValue });
      setNewLabel('');
      setNewValue('');
      fetchData();
      toast.success('New entry added!');
    } catch {
      toast.error('Failed to add entry');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-6xl border border-gray-200">
        <div className="mb-6 text-right">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            🏠 Go to Dashboard
          </button>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Add Fix Ank
        </h2>

        {/* Add New Entry */}
        <div className="mb-8 grid grid-cols-2 gap-4 items-center">
          <input
            type="text"
            placeholder="Label (e.g. MILAN MORNING)"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Value"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-4 rounded hover:bg-green-700 transition"
            >
              Add
            </button>
          </div>
        </div>

        {/* Existing Entries */}
        <form onSubmit={handleUpdateAll}>
          <div className="grid grid-cols-2 gap-y-6 gap-x-12">
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <label className="text-gray-800 font-semibold mt-1">{item.label}</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={item.value}
                    onChange={(e) => handleChange(item.id, e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(item.value)}
                    className="p-2 text-gray-600 hover:bg-gray-200 rounded-md"
                    title="Copy"
                  >
                    <FiCopy size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-red-500 hover:bg-red-100 rounded-md"
                    title="Delete"
                  >
                    <FiTrash size={16} />
                  </button>
                </div>
              </React.Fragment>
            ))}
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
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default FixAnkForm;
