import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Matka from "../assets/matka.png";
import { FaBell, FaUser, FaCog, FaChartBar, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ onLogout }) => {
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", route: "/dashboard", icon: <FaChartBar /> },
   // { label: "User List", route: "/users", icon: <FaUser /> },
   // { label: "Result", route: "/result", icon: <FaChartBar /> },
    { label: "Personal Market", route: "/personal-market", icon: <FaChartBar /> },
   // { label: "Market List", route: "/markets", icon: <FaChartBar /> },
    { label: "Add Final Ank", route: "/add-final-ank", icon: <FaChartBar /> },
    { label: "Add Fix Ank", route: "/add-fix-ank", icon: <FaChartBar /> },
    { label: "Lucky Chance", route: "/lucky-chance", icon: <FaChartBar /> },
    { label: "Weekly Patti Panel", route: "/weekly-panel", icon: <FaChartBar /> },
    { label: "Daily Charts", route: "/daily-charts", icon: <FaChartBar /> },
    { label: "Contact settings", route: "/contact-settings", icon: <FaCog /> },
    { label: "Change Password", route: "/change-password", icon: <FaCog /> },
     { label: "Logout", route: "#", icon: <FaSignOutAlt /> },
  ];

  return (<div className="h-screen w-72 bg-[#0e1525] text-white p-4 flex flex-col gap-2 overflow-y-auto sticky top-0">

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-extrabold tracking-wide">Admin-Panel</h1>
        <FaBell className="text-white text-xl" />
      </div>
      {menuItems.map(({ label, route, icon }, index) => (
        <Link
          key={index}
          to={route !== "#" ? route : "#"}
          onClick={() => label === "Logout" && onLogout()}
          className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-[#1f2a41] transition duration-200 ${
            location.pathname === route ? "bg-[#1f2a41]" : ""
          }`}
        >
          <div className="text-pink-500 text-lg">{icon}</div>
          <span className="text-white font-medium">{label}</span>
        </Link>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      setUser({ name: "Admin User", mobile: "1234567890" });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar onLogout={handleLogout} />
      <div className="flex-1 bg-gradient-to-br from-[#f5f7fa] to-[#dbe9f4] p-6 md:p-10">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <img src={Matka} alt="Matka Logo" className="w-16 h-16 rounded-full shadow-lg" />
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#af0014] drop-shadow-md">
              Satta Matka Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <FaBell className="text-xl text-gray-600 cursor-pointer" />
            <button 
              onClick={handleLogout} 
              className="text-white font-semibold bg-red-500 hover:bg-red-600 rounded px-4 py-2 text-sm"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-pink-600">450</h3>
            <p className="text-gray-600">Bids Today</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-pink-600">23</h3>
            <p className="text-gray-600">New Users</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-pink-600">12</h3>
            <p className="text-gray-600">Markets Running</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-pink-600">₹1,20,000</h3>
            <p className="text-gray-600">Revenue</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section className="bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold text-pink-600 mb-4">User Information</h2>
            {user ? (
              <div className="space-y-2 text-base text-gray-800">
                <p>
                  <span className="font-semibold text-pink-500">Name:</span> {user.name}
                </p>
                <p>
                  <span className="font-semibold text-pink-500">Mobile:</span> {user.mobile}
                </p>
              </div>
            ) : (
              <p>Loading user info...</p>
            )}
          </section>

          <section className="bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold text-pink-600 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition">
                View Reports
              </button>
              <button className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-semibold transition">
                Manage Users
              </button>
              <button className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-semibold transition">
                Settings
              </button>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold text-pink-600 mb-4">Analytics</h2>
            <ul className="space-y-2 text-gray-700">
              <li>📈 Active Markets: 12</li>
              <li>👥 Total Users: 2,348</li>
              <li>💹 Today's Bids: 450</li>
            </ul>
          </section>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#333] mb-4">Latest Updates</h2>
          <div className="bg-white p-6 rounded-2xl shadow-xl text-gray-700">
            <p className="mb-2">🎯 New weekly patti panel updated.</p>
            <p>⚙️ Backend system maintenance scheduled for Sunday at 2 AM.</p>
          </div>
        </div>

        <footer className="text-center text-sm mt-10 text-gray-500">
          © {new Date().getFullYear()} Satta Matka Admin Panel. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
