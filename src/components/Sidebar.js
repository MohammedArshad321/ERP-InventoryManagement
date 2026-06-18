import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdDashboard, MdGroups, MdCategory, MdOutlineProductionQuantityLimits, MdOutlineAddShoppingCart, MdOutlinePayment, MdLogout } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { FaCodeBranch } from 'react-icons/fa';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('auth_user');
    sessionStorage.removeItem('auth_token');
    navigate('/login');
  };

  const navClass = ({ isActive }) => `link sidebar-link ${isActive ? 'active' : ''}`;

  return (
    <div className="sidebar-container">
      <div className="menu">
        <NavLink to="/" end className={navClass}>
          <div className="menu-item">
            <i className="icon-sidebar">
              <MdDashboard />
            </i>
            Dashboard
          </div>
        </NavLink>
        <NavLink to="/customer" className={navClass}>
          <div className="menu-item">
            <i className="icon-sidebar">
              <MdGroups />
            </i>
            Customers
          </div>
        </NavLink>
        <NavLink to="/employees" className={navClass}>
          <div className="menu-item">
            <i className="icon-sidebar">
              <IoMdPerson />
            </i>
            Employees
          </div>
        </NavLink>
        <NavLink to="/products" className={navClass}>
          <div className="menu-item">
            <i className="icon-sidebar">
              <MdCategory />
            </i>
            Categories
          </div>
        </NavLink>
        <NavLink to="/product-list" className={navClass}>
          <div className="menu-item">
            <i className="icon-sidebar">
              <MdOutlineProductionQuantityLimits />
            </i>
            Products
          </div>
        </NavLink>
        <NavLink to="/sales-orders" className={navClass}>
          <div className="menu-item">
            <i className="icon-sidebar">
              <MdOutlineAddShoppingCart />
            </i>
            Orders
          </div>
        </NavLink>
        <NavLink to="/manage-stores" className={navClass}>
          <div className="menu-item">
            <i className="icon-sidebar">
              <FaCodeBranch />
            </i>
            Branches
          </div>
        </NavLink>
        <NavLink to="/billing" className={navClass}>
          <div className="menu-item">
            <i className="icon-sidebar">
              <MdOutlinePayment />
            </i>
            Billing
          </div>
        </NavLink>
        <button type="button" className="link sidebar-link sidebar-logout" onClick={handleLogout}>
          <div className="menu-item">
            <i className="icon-sidebar">
              <MdLogout />
            </i>
            Logout
          </div>
        </button>
      </div>
    </div>
  );
}
