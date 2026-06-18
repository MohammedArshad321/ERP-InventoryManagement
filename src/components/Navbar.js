import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { FaSearchDollar, FaSignOutAlt } from 'react-icons/fa';

export default function Navbar() {
  const user = JSON.parse(sessionStorage.getItem('auth_user') || 'null');

  const handleLogout = () => {
    sessionStorage.removeItem('auth_user');
    sessionStorage.removeItem('auth_token');
    window.location.href = '/login';
  };

  return (
    <div className="navbar">
      <div className="app-logo">
        <Link to="/" className="link">
          <span>Inventory Manager</span>
        </Link>
      </div>
      <div className="search-bar">
        <FaSearchDollar />
        <input type="search" placeholder="Search inventory, orders, customers..." />
      </div>
      <div className="nav-actions">
        {user ? (
          <>
            <Link to="/profile" className="link user-pill">
              <VscAccount /> {user.name || user.email}
            </Link>
            <button className="logout-button" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="link action-link">
            Login / Register
          </Link>
        )}
      </div>
    </div>
  );
}

