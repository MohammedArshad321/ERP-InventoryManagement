import React from 'react';
import { HiPlus } from 'react-icons/hi';

const tasks = [
  { title: 'Complete payroll review', due: 'Due today' },
  { title: 'Prepare appointment summary', due: 'Due tomorrow' },
  { title: 'Update task progress report', due: 'Due Wed, 24 Jun' },
];

export default function ProfileTask() {
  return (
    <div className="profile-tab-content">
      <div className="profile-tab-header">
        <div>
          <h2>Task List</h2>
          <p>Track your tasks and add new work items for today.</p>
        </div>
        <button className="profile-action-button">
          <HiPlus /> New Task
        </button>
      </div>
      <div className="profile-card-grid">
        {tasks.map((task, index) => (
          <div key={index} className="profile-list-card">
            <h3>{task.title}</h3>
            <p>{task.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
