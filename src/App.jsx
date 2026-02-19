import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Transfer from "./Pages/Transfer";
import Withdraw from "./Pages/withdraw";
import Profile from "./Pages/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [balance, setBalance] = useState(200456.34);
  const [transactions, setTransactions] = useState([]);

  // Load saved data
  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedBalance = localStorage.getItem("balance");
    const storedTransactions = localStorage.getItem("transactions");

    if (storedLogin === "true") setIsLoggedIn(true);
    if (storedBalance) setBalance(parseFloat(storedBalance));
    if (storedTransactions) setTransactions(JSON.parse(storedTransactions));
  }, []);

  // Save balance
  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  // Save transactions
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>

          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
      <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <Dashboard
                  balance={balance}
                  transactions={transactions}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/transfer"
            element={
              isLoggedIn ? (
                <Transfer
                  balance={balance}
                  setBalance={setBalance}
                  transactions={transactions}
                  setTransactions={setTransactions}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/withdraw"
            element={
              isLoggedIn ? (
                <Withdraw
                  balance={balance}
                  setBalance={setBalance}
                  transactions={transactions}
                  setTransactions={setTransactions}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/" />
              )
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
