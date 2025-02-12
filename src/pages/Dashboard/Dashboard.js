// File: src/pages/Dashboard/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>1,234</p>
        </div>
        <div className="stat-card">
          <h3>Active Users</h3>
          <p>892</p>
        </div>
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p>$12,345</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;