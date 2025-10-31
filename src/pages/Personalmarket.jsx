import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PersonalMarket() {
  const [times, setTimes] = useState([]);
  const [newTime, setNewTime] = useState({ label: "", time_range: "", value: "" });
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  // Use environment variable for base API URL
  const API_URL = import.meta.env.VITE_API_URL || "";

  const allowedMarkets = [
      "Shubh Morning",
    "Shubh Day Open", 
    "Shubh Night",
    "SUNDAY  DAY",
    "SUNDAY NIGHT",
    "MUMBAI DAY",
    "MUMBAI NIGHT",
    "KALYAN DAY",
    "KALYAN NIGHT", 
    "RAJDHANI DAY",
    "RAJDHANI NIGHT",
    "MILAN DAY",
    "MILAN NIGHT",
    "SRIDEVI DAY",
    "SRIDEVI NIGHT",
    "TIME BAZAR DAY",
    "TIME BAZAR NIGHT",
    "MAIN BAZAR DAY", 
    "MAIN BAZAR NIGHT"

  ];

  useEffect(() => {
    fetchTimes();
  }, []);

  const fetchTimes = () => {
    axios
      .get(`${API_URL}/api/shubhtimes`)
      .then((res) => setTimes(res.data))
      .catch(() => showAlert("error", "Failed to fetch market data."));
  };

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: "", message: "" }), 3000);
  };

  const handleChange = (e) => {
    setNewTime({ ...newTime, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { label, time_range, value } = newTime;

    if (!allowedMarkets.includes(label)) {
      showAlert("error", `❌ '${label}' is not allowed.`);
      return;
    }

    const exists = times.find(
      (t) => t.label.toLowerCase() === label.toLowerCase() && t.id !== editId
    );
    if (exists) {
      showAlert("error", `❌ '${label}' already exists.`);
      return;
    }

    try {
      if (editId) {
        await axios.put(`${API_URL}/api/shubhtimes/${editId}`, newTime);
        showAlert("success", "✅ Market updated!");
      } else {
        await axios.post(`${API_URL}/api/shubhtimes`, newTime);
        showAlert("success", "✅ Market added!");
      }

      setEditId(null);
      setNewTime({ label: "", time_range: "", value: "" });
      fetchTimes();
    } catch {
      showAlert("error", "❌ Operation failed.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/shubhtimes/${id}`);
      showAlert("success", "🗑️ Market deleted.");
      fetchTimes();
    } catch {
      showAlert("error", "❌ Delete failed.");
    }
  };

  const handleEdit = (item) => {
    setNewTime({ label: item.label, time_range: item.time_range, value: item.value });
    setEditId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl shadow-2xl border">
      <div className="mb-6 text-right">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition font-semibold"
        >
          🏠 Go to Dashboard
        </button>
      </div>
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-800">
        {editId ? "✏️ Edit Market Entry" : "📈 Personal Market Update"}
      </h2>

      {alert.message && (
        <div
          className={`mb-4 p-3 rounded-lg text-white font-semibold shadow ${
            alert.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {alert.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="label"
          value={newTime.label}
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        >
          <option value="">-- Select Market --</option>
          {allowedMarkets.map((m, idx) => (
            <option key={idx} value={m}>{m}</option>
          ))}
        </select>

        <input
          name="time_range"
          value={newTime.time_range}
          placeholder="Time Range (e.g. 10:00 AM - 11:00 AM)"
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          name="value"
          value={newTime.value}
          placeholder="Market Value (e.g. XYZ-123)"
          onChange={handleChange}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition 
            ${editId ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {editId ? "✅ Update Market" : "➕ Add Market"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={() => {
              setNewTime({ label: "", time_range: "", value: "" });
              setEditId(null);
            }}
            className="text-sm text-gray-600 hover:underline mt-1 text-center block"
          >
            ❌ Cancel Edit
          </button>
        )}
      </form>

      <div className="mt-8 space-y-4">
        {times.length === 0 ? (
          <p className="text-center text-gray-600">No market data available.</p>
        ) : (
          times.map((t) => (
            <div
              key={t.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex justify-between items-start border-l-4 border-purple-400"
            >
              <div>
                <h3 className="text-lg font-bold text-purple-700">{t.label}</h3>
                <p className="text-sm text-gray-600">{t.time_range}</p>
                <p className="text-sm text-blue-500 font-mono">{t.value}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => handleEdit(t)}
                  className="text-yellow-600 hover:text-yellow-800 text-xl"
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="text-red-600 hover:text-red-800 text-xl"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
