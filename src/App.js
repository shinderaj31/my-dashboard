// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SupplierRegistrationForm from './components/forms/SupplierRegistration/SupplierRegistrationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/supplier/registration" element={<SupplierRegistrationForm />} />
        {/* Add other standalone form routes here */}
      </Routes>
    </Router>
  );
}

export default App;