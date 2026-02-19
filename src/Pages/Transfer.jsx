import React from "react";

import { useNavigate } from "react-router-dom";

export default function Transfer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 bg-gray-800 px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <h1 className="text-xl font-bold mb-6">Transfer Money</h1>

      <div className="bg-gray-900 p-6 rounded-2xl max-w-md mx-auto">
        <input
          type="text"
          placeholder="Recipient Account"
          className="w-full p-3 mb-4 bg-black border border-gray-700 rounded-lg"
        />

        <input
          type="number"
          placeholder="Amount"
          className="w-full p-3 mb-6 bg-black border border-gray-700 rounded-lg"
        />

        <button className="w-full bg-green-600 p-3 rounded-lg">
          Send Money
        </button>
      </div>
    </div>
  );
}
