import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const API_URL = `${import.meta.env.VITE_API_URL}/api/contact`;

const ContactSettings = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    whatsappNumber: '',
  });
  const [contacts, setContacts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setContacts(data);
    } catch {
      toast.error('❌ Failed to fetch contact data.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.mobile || !formData.email) {
      return toast.error('⚠️ Please fill in all required fields!');
    }

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message || '✅ Saved!');
        setFormData({ mobile: '', email: '', whatsappNumber: '' });
        setEditingId(null);
        fetchContacts();
      } else {
        toast.error(result.message || '❌ Something went wrong.');
      }
    } catch (err) {
      toast.error('❌ Server error. Please try again.');
    }
  };

  const handleEdit = (contact) => {
    setFormData({
      mobile: contact.mobile,
      email: contact.email,
      whatsappNumber: contact.whatsapp_number || '',
    });
    setEditingId(contact.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      const result = await res.json();

      if (res.ok) {
        toast.success(result.message || '🗑️ Deleted successfully');
        fetchContacts();
      } else {
        toast.error('❌ Delete failed');
      }
    } catch {
      toast.error('❌ Server error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6 border">
        <div className="mb-6 text-right">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            🏠 Go to Dashboard
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">📞 Contact Settings</h2>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label className="block font-medium">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">WhatsApp Number</label>
            <input
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            {editingId ? '✏️ Update Contact' : '➕ Add Contact'}
          </button>
        </form>

        <h3 className="text-xl font-semibold mb-4">📋 Saved Contacts</h3>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className="flex justify-between items-center mb-4 border-b py-2">
              <div>
                <p><strong>Mobile:</strong> {contact.mobile}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>WhatsApp:</strong> {contact.whatsapp_number || '-'}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(contact)}
                  className="text-blue-600 hover:underline"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="text-red-600 hover:underline"
                >
                  🗑️ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ContactSettings;
