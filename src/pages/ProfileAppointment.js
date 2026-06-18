import React from 'react';
import { HiPlus } from 'react-icons/hi';

const appointments = [
  { title: 'One-on-one review', time: 'Mon 10:00 AM', location: 'Meeting Room B' },
  { title: 'Client follow-up', time: 'Tue 3:00 PM', location: 'Zoom' },
  { title: 'Team planning session', time: 'Thu 11:30 AM', location: 'Conference Hall' },
];

export default function ProfileAppointment() {
  return (
    <div className="profile-tab-content">
      <div className="profile-tab-header">
        <div>
          <h2>Appointments</h2>
          <p>Review upcoming meetings and add new appointments.</p>
        </div>
        <button className="profile-action-button">
          <HiPlus /> New Appointment
        </button>
      </div>
      <div className="profile-card-grid">
        {appointments.map((appointment, index) => (
          <div key={index} className="profile-list-card">
            <h3>{appointment.title}</h3>
            <p>{appointment.time}</p>
            <p>{appointment.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
