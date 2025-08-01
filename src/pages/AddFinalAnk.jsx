import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FiCopy, FiTrash2, FiPlus, FiEdit2, FiCheck, FiX } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AddFinalAnk = () => {
  const [data, setData] = useState([]);
  const [newLabel, setNewLabel] = useState('');
  const [newValue, setNewValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editBuffer, setEditBuffer] = useState({});
  const navigate = useNavigate();

  // ✅ Load API base from .env
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${API_URL}/api/finalank`)
      .then(res => setData(res.data))
      .catch(() => toast.error("Failed to load data"));
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditBuffer({ label: item.label, value: item.value });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditBuffer({});
  };

  const saveEdit = async (id) => {
    try {
      const updatedItem = { ...editBuffer, id };
      await axios.put(`${API_URL}/api/finalank`, { data: [updatedItem] });
      toast.success("Updated successfully!");
      setData(data.map(item => item.id === id ? updatedItem : item));
      cancelEdit();
    } catch {
      toast.error("Update failed!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/finalank/${id}`);
      toast.success("Deleted!");
      setData(data.filter(item => item.id !== id));
    } catch {
      toast.error("Failed to delete");
    }
  };

  const handleAdd = async () => {
    if (!newLabel || !newValue) {
      toast.warn("Label and Value required");
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/api/finalank`, {
        label: newLabel,
        value: newValue
      });
      toast.success("Added successfully!");
      setData([...data, { id: res.data.id, label: newLabel, value: newValue }]);
      setNewLabel('');
      setNewValue('');
    } catch {
      toast.error("Failed to add");
    }
  };

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
    toast.info(`Copied: ${value}`, { autoClose: 1000 });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-6xl">
        <div className="mb-6 text-right">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            🏠 Go to Dashboard
          </button>
        </div>
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">Manage Final Ank</h1>

        {/* Add New Final Ank */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <input
            type="text"
            placeholder="New Label"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="New Value"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded flex items-center justify-center gap-2"
          >
            <FiPlus /> Add
          </button>
        </div>

        {/* Existing Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {data.map((item) => (
            <div key={item.id} className="border rounded p-3">
              <label className="block text-sm text-gray-600 mb-1">Label</label>
              {editingId === item.id ? (
                <input
                  type="text"
                  value={editBuffer.label}
                  onChange={(e) => setEditBuffer({ ...editBuffer, label: e.target.value })}
                  className="w-full border px-2 py-1 rounded mb-2"
                />
              ) : (
                <p className="mb-2 text-gray-800">{item.label}</p>
              )}

              <label className="block text-sm text-gray-600 mb-1">Value</label>
              <div className="flex items-center">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={editBuffer.value}
                    onChange={(e) => setEditBuffer({ ...editBuffer, value: e.target.value })}
                    className="w-full border px-2 py-1 rounded"
                  />
                ) : (
                  <span className="w-full">{item.value}</span>
                )}
                <button
                  type="button"
                  onClick={() => copyToClipboard(item.value)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                  title="Copy"
                >
                  <FiCopy size={18} />
                </button>
              </div>

              <div className="flex justify-end gap-2 mt-3">
                {editingId === item.id ? (
                  <>
                    <button
                      onClick={() => saveEdit(item.id)}
                      className="text-green-600 hover:text-green-800"
                      title="Save"
                    >
                      <FiCheck size={18} />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="text-gray-500 hover:text-gray-700"
                      title="Cancel"
                    >
                      <FiX size={18} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEdit(item)}
                      className="text-yellow-600 hover:text-yellow-800"
                      title="Edit"
                    >
                      <FiEdit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default AddFinalAnk;
