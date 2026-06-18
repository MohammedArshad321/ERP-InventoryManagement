import React from 'react';
import './Profile.css';
import { links } from '../pages/ProfileDetails';
import profile from '../media/profile.jpg';
import { HiOutlineArrowLeft, HiOutlineUpload } from 'react-icons/hi';
import { NavLink, Link, Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="Profile-container">
      <div className="client-area">
        <div className="client-heading">
          <div className="title">
            <Link to="/">
              <i className="left-arrow"><HiOutlineArrowLeft /></i>
            </Link>
            <label className="label-top">Employee Profile</label>
          </div>
        </div>
        <div className="img-card">
          <div className="img-upload-group">
            <div className="img">
              <img src={profile} alt="Profile" />
            </div>
            <label className="upload-badge">
              <HiOutlineUpload />
              <span>Upload</span>
              <input type="file" accept="image/*" className="image-upload-input" />
            </label>
          </div>
          <h2>Mohammed Arshad</h2>
        </div>
        <div className="employee-container">
          <div className="title">
            <h3>Employee details</h3>
          </div>
          <div className="employee-details">
            <div className="employee-key">
              <label>Job Title :</label>
              <label>Department :</label>
              <label>Business Unit :</label>
              <label>Reporting To :</label>
              <label>Employee No :</label>
            </div>
            <div className="employee-value">
              <label>React Developer</label>
              <label>Full Stack Developer</label>
              <label>Meta Inc</label>
              <label>Mahmood Ghouri</label>
              <label>235879</label>
            </div>
          </div>
        </div>
        <div className="personal-container">
          <div className="title">
            <h3>Personal details</h3>
          </div>
          <div className="personal-details">
            <div className="personal-key">
              <label>Email :</label>
              <label>Phone Number :</label>
              <label>Date of Birth :</label>
              <label>Home address :</label>
              <label>Marital status :</label>
            </div>
            <div className="personal-value">
              <label>mohdarshad102me@gmail.com</label>
              <label>+91 9182631746</label>
              <label>02/06/1995</label>
              <label>Hyderabad, Telangana</label>
              <label>Unmarried</label>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-area">
        <div className="profile-menu">
          <div className="menu-items">
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => (isActive ? 'current' : '')}
              >
                <li>{item.name}</li>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="profile-tab-view">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
