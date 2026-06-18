import React from 'react';
import { HiPlus } from 'react-icons/hi';

const notes = [
  { title: 'Project kickoff review', content: 'Review the project scope and action plan for the new quarter.' },
  { title: 'Client feedback note', content: 'Document key follow-up items from the last client meeting.' },
  { title: 'Process improvement', content: 'Capture ideas to improve task handoff across teams.' },
];

export default function ProfileNotes() {
  return (
    <div className="profile-tab-content">
      <div className="profile-tab-header">
        <div>
          <h2>Notes</h2>
          <p>View all notes and add quick reminders or summaries.</p>
        </div>
        <button className="profile-action-button">
          <HiPlus /> Add Note
        </button>
      </div>
      <div className="profile-card-grid">
        {notes.map((note, index) => (
          <div key={index} className="profile-list-card note-card-large">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
