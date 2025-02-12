// File: src/layouts/MainLayout.js
import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import '../styles/MainLayout.css';

const MainLayout = () => {
  console.log('MainLayout rendering'); // Add this debug log
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Sidebar />
        
<main className="main">
  <div className="dashboard-header">
    <h1 className="dashboard-title">Welcome back, Raj!</h1>
    <p className="dashboard-subtitle">Here's what's happening today</p>
  </div>
  
  <div className="stats-grid">
    <div className="stat-card">
      <div className="stat-icon">👥</div>
      <h3>Total Users</h3>
      <p className="stat-number">1,234</p>
      <p className="stat-change positive">+12.5%</p>
    </div>
    <div className="stat-card">
      <div className="stat-icon">💰</div>
      <h3>Revenue</h3>
      <p className="stat-number">$12,345</p>
      <p className="stat-change positive">+8.2%</p>
    </div>
    <div className="stat-card">
      <div className="stat-icon">📊</div>
      <h3>Active Projects</h3>
      <p className="stat-number">45</p>
      <p className="stat-change negative">-2.4%</p>
    </div>
  </div>
  <Outlet/>
</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;