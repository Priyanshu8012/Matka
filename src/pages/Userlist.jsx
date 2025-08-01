import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample user data
const usersData = [
  {
    id: 1,
    name: "John Doe",
    phone: "9876543210",
    days: "Expired",
    status: "Active",
  },
  {
    id: 2,
    name: "Alice Smith",
    phone: "1234567890",
    days: "Active",
    status: "Suspended",
  },
];

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [users, setUsers] = useState(usersData); // State to store the filtered users
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [newUser, setNewUser] = useState({ name: "", phone: "", days: "Active", status: "Active" }); // State for the new user form

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Update the search query
    const filteredUsers = usersData.filter(
      (user) =>
        user.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        user.phone.includes(event.target.value)
    );
    setUsers(filteredUsers); // Update the users list based on the search query
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewUser({ name: "", phone: "", days: "Active", status: "Active" }); // Reset the form
  };

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUser.name && newUser.phone) {
      setUsers([...users, { ...newUser, id: users.length + 1 }]); // Add the new user to the list
      closeModal(); // Close the modal
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-6">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-6xl border border-gray-200">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          {/* Home Button */}
          <Link to="/dashboard">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
              Home
            </button>
          </Link>

          <h2 className="text-3xl font-bold text-gray-800">Satta Matka User List</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch} // Trigger the search handler on change
              placeholder="Search by name or phone..."
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-80"
            />
            <button
              onClick={openModal}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
            >
              Add New User
            </button>
          </div>
        </div>

        {/* Table Section */}
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Days</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-all duration-200">
                <td className="px-6 py-4 text-sm text-gray-800 border-b">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600 border-b">{user.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-800 border-b">{user.days}</td>
                <td className="px-6 py-4 text-sm text-gray-800 border-b">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      user.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm space-x-3 border-b">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
                    Edit
                  </button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-200">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Section */}
        <div className="flex justify-between items-center mt-6">
          <button className="text-blue-600 hover:underline focus:outline-none">Previous</button>
          <button className="text-blue-600 hover:underline focus:outline-none">Next</button>
        </div>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">Add User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter user name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={newUser.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter user phone"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-all duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;