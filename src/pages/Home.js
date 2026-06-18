import React from 'react';
import './Home.css';
import Dashboard from '../components/Dashboard';
import DashboardDetails from './DashboardDetails';

export default function Home() {
  return (
    <div className="HomePage">
      <div className="Dashboard-container">
        <div className="dashboard-header">
          <div>
            <h2>Dashboard</h2>
            <p className="dashboard-subtitle">Your inventory overview and quick access navigation.</p>
          </div>
        </div>
        <div className="card-container">
          {DashboardDetails.map((item) => (
            <Dashboard
              key={item.id}
              title={item.title}
              content={item.content}
              info={item.info}
              svg={item.svg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
