import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.oldPassword || !formData.newPassword || !formData.confirmNewPassword) {
      toast.error("Please fill in all fields!", { position: "top-center", autoClose: 2000, theme: "dark" });
      return;
    }

    if (formData.newPassword !== formData.confirmNewPassword) {
      toast.error("New passwords do not match!", { position: "top-center", autoClose: 2000, theme: "dark" });
      return;
    }

    try {
      setLoading(true);

      const requestBody = {
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      };

      const response = await fetch("http://localhost:5000/api/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to change password");
      }

      const data = await response.json();

      toast.success(data.message || "Password changed successfully!", { position: "top-center", autoClose: 2000, theme: "dark" });

      setFormData({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(error.message || "An error occurred. Please try again later.", { position: "top-center", autoClose: 2000, theme: "dark" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-10">
      <div className="w-full max-w-2xl bg-[#10141e] border border-gray-700 rounded-2xl shadow-2xl p-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-8">
          Change Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Old Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-2">
              Old Password
            </label>
            <input
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter old password"
              required
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-2">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
              required
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm new password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3 px-12 rounded-full transition-transform transform hover:scale-105 duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Processing..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ChangePassword;
