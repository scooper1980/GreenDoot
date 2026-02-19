import React from "react";

export default function Navbar({ setView }) {
  return (
    <nav className="navbar dark-nav">
      <div className="logo">Green Doot Bank</div>

      <div className="nav-links">
        <button onClick={() => setView("dashboard")}>
          Dashboard
        </button>
        <button onClick={() => setView("profile")}>
          Profile
        </button>
      </div>
    </nav>
  );
}
