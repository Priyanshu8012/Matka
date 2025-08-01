import { useState } from "react";
import axios from "axios";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import Matka from "../assets/matka.png";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
     const res = await axios.post(`${API_URL}/api/auth/login`, {
  mobile,
  password,
});

  
      // Check if token exists in the response
      if (res.data.token) {
        console.log("Token received:", res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      } else {
        console.error("Token not received in response");
        alert("Login failed: Token not provided by server");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response?.data?.message || "Login failed");
    }
  };
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/api/auth/signup`, {
  mobile,
  password,
});

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155]">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl text-white">
        <div className="text-center mb-8">
          <img
            src={Matka}
            alt="Satamatka Logo"
            className="w-20 mx-auto mb-4 drop-shadow-lg rounded-full"
          />
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            SATA<span className="text-pink-500">MATKA</span>
          </h1>
          <p className="text-sm text-gray-300 font-medium tracking-wide">
            {isLogin ? "Admin Panel Login" : "Admin Panel Signup"}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 outline-none transition duration-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 outline-none transition duration-200"
                required
              />
            </div>
          )}

          <button
            type="button"
            onClick={isLogin ? handleLogin : handleSignup}
            className="w-full py-3 bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-pink-500 hover:underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
