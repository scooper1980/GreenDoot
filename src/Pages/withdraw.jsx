import React from "react";

import { useNavigate } from "react-router-dom";

export default function Withdraw() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 bg-gray-800 px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <h1 className="text-xl font-bold mb-6">Withdraw Funds</h1>

      <div className="bg-gray-900 p-6 rounded-2xl max-w-md mx-auto">
        <input
          type="number"
          placeholder="Enter Amount"
          className="w-full p-3 mb-6 bg-black border border-gray-700 rounded-lg"
        />

        <button className="w-full bg-blue-600 p-3 rounded-lg">
          Withdraw
        </button>
      </div>
    </div>
  );
}
