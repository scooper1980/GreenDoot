import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  // Load saved image on refresh
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  // Save image to localStorage
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("profileImage", reader.result);
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 bg-gray-800 px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <div className="bg-gray-900 p-8 rounded-2xl max-w-md mx-auto text-center">

        <img
          src={image || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-green-600 mb-4"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-6"
        />

        <h2 className="text-lg font-semibold">Pamela Sue Leasor</h2>
        <p className="text-gray-400 mb-6">pleasor1957@icloud.com</p>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 p-3 rounded-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
