import React from "react";

import { useNavigate } from "react-router-dom";



export default function Dashboard() {
  const navigate = useNavigate();

  const transactions = [
    {
      id: 1,
      name: "Grant Deposit",
      amount: 4500,
      date: "Feb 19, 2026",
      time: "10:45 AM",
      status: "Completed",
    },
    {
      id: 2,
      name: "Bonus Deposit",
      amount: 5000000,
      date: "Feb 18, 2026",
      time: "08:20 AM",
      status: "Completed",
    },
    {
      id: 3,
      name: "GHR Deposit",
      amount: 6868,
      date: "Feb 17, 2026",
      time: "06:12 PM",
      status: "Completed",
    },
    {
      id: 4,
      name: "World Finance Loan",
      amount: 1700,
      date: "Feb 19, 2026",
      time: "10:45 AM",
      status: "Canceled",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Green Doot</h1>
        <button
          onClick={() => navigate("/profile")}
          className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Profile
        </button>
      </div>

      {/* Balance */}
      <div className=" from-green-600 to-green-800 p-6 rounded-2xl mb-8 shadow-xl">
        <p>Available Balance</p>
        <h2 className="text-3xl font-bold mt-2">$2,456,34.000</h2>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <button
          onClick={() => navigate("/transfer")}
          className="bg-gray-900 p-4 rounded-xl hover:bg-gray-800"
        >
          Transfer
        </button>

        <button
          onClick={() => navigate("/withdraw")}
          className="bg-gray-900 p-4 rounded-xl hover:bg-gray-800"
        >
          Withdraw
        </button>
      </div>

      {/* Transactions */}
      <div className="bg-gray-950 border border-gray-800 p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-6">Transaction History</h2>

        <div className="space-y-6">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex flex-col md:flex-row md:justify-between border-b border-gray-800 pb-4"
            >
              <div>
                <p className="font-medium">{tx.name}</p>
                <p className="text-sm text-gray-400">
                  {tx.date} • {tx.time}
                </p>
                <span className="text-xs text-green-500">
                  {tx.status}
                </span>
              </div>

              <p
                className={`mt-2 md:mt-0 font-semibold ${
                  tx.amount > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {tx.amount > 0 ? "+" : "-"} $
                {Math.abs(tx.amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
