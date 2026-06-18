import React from 'react';
import { HiDocumentText } from 'react-icons/hi';
import { inputs } from './ProfileDetails';
import ProfileInputs from '../components/Profile_Inputs';

export default function ProfileOverview() {
  return (
    <div className="profile-tab-content">
      <div className="profile-tab-header">
        <div>
          <h2>Overview</h2>
          <p>Recent activities, notes, and documents for your profile.</p>
        </div>
      </div>
      <div className="latest-task profile-section-card">
        <div className="task-heading">
          <div><h2>Latest Tasks</h2></div>
          <div className="section-link">Show all</div>
        </div>
        <div className="task-content">
          {inputs.map((item, index) => (
            <ProfileInputs
              key={index}
              type={item.type}
              value={item.value}
              name={item.name}
              date={item.date}
            />
          ))}
        </div>
      </div>
      <div className="documents-and-notes profile-section-card">
        <div className="document-heading">
          <div><h2>Documents</h2></div>
          <div className="section-link">Show all</div>
        </div>
        <div className="document-area">
          {['Client Intake Form', 'Education Documents', 'Policy Certificate', 'Payroll Summary'].map((title, index) => (
            <div key={index} className="document-card">
              <div className="document-details">
                <div className="document-icon">
                  <i className="icon-doc"><HiDocumentText /></i>
                </div>
                <div className="document-content">
                  <h4>{title}</h4>
                  <p>Submitted on 19 Nov, 2022</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="notes-container">
          <div className="notes-heading">
            <div><h2>Notes</h2></div>
            <div className="section-link">Show all</div>
          </div>
          <div className="notes-area">
            {['Task review notes', 'Client feedback summary', 'Meeting follow-up'].map((title, index) => (
              <div key={index} className="note-card">
                <div className="note-details">
                  <div className="title"><h3>{title}</h3></div>
                  <div className="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
