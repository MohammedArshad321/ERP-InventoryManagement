import React from 'react';

const slips = [
  { month: 'June 2026', status: 'Issued', amount: '$4,200' },
  { month: 'May 2026', status: 'Issued', amount: '$4,150' },
  { month: 'April 2026', status: 'Issued', amount: '$4,100' },
];

export default function ProfileBilling() {
  return (
    <div className="profile-tab-content">
      <div className="profile-tab-header">
        <div>
          <h2>Salary Slips</h2>
          <p>Access your monthly salary slip history and download pay statements.</p>
        </div>
      </div>
      <div className="profile-card-grid">
        {slips.map((slip, index) => (
          <div key={index} className="profile-list-card">
            <div className="profile-card-meta">
              <span>{slip.month}</span>
              <strong>{slip.amount}</strong>
            </div>
            <p>Status: {slip.status}</p>
            <button className="secondary-action-button">Download</button>
          </div>
        ))}
      </div>
    </div>
  );
}
