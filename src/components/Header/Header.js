// File: src/components/Header/Header.js
import React from 'react';
import { LogOut, Search, Bell, Layout } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="app-title">
        <Layout size={24} />
        <span>Dashboard</span>
      </div>
      
      <div className="header-controls">
        <div className="search-bar">
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            className="search-input"
            placeholder="Search anything..."
          />
        </div>

        <div className="profile-section">
          <div className="notifications">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </div>
          
          <div className="profile-info">
            <div className="profile-pic">
              <img
                src="/api/placeholder/40/40"
                alt="Profile"
              />
            </div>
            <div className="profile-details">
              <span className="profile-name">Raj Shinde</span>
              <span className="profile-role">Administrator</span>
            </div>
          </div>

          <button className="logout-button">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;