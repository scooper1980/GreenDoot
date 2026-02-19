import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // VERY IMPORTANT (prevents page refresh)

    setLoading(true);

    setTimeout(() => {
      setIsLoggedIn(true);     // tells App user is logged in
      navigate("/dashboard");  // go to dashboard
    }, 800);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-2xl shadow-xl w-96"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Green Doot Bank
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-black border border-gray-700 rounded-lg text-white"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-black border border-gray-700 rounded-lg text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-lg transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
