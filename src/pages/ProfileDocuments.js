import React from 'react';

const documents = [
  { title: 'Employment Agreement', date: '19 Jun 2026' },
  { title: 'ID Verification', date: '05 Jun 2026' },
  { title: 'Performance Review', date: '24 May 2026' },
];

export default function ProfileDocuments() {
  return (
    <div className="profile-tab-content">
      <div className="profile-tab-header">
        <div>
          <h2>Documents</h2>
          <p>Manage your documents and add new files from your device or cloud.</p>
        </div>
      </div>
      <div className="profile-action-row">
        <button className="profile-action-button">Upload from computer</button>
        <button className="secondary-action-button">Add from cloud</button>
      </div>
      <div className="profile-card-grid">
        {documents.map((doc, index) => (
          <div key={index} className="profile-list-card">
            <h3>{doc.title}</h3>
            <p>{doc.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
