// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SupplierRegistrationForm from './components/forms/SupplierRegistration/SupplierRegistrationForm';
// Update the import path
import ViewSuppliers from './pages/Supplier/ViewSuppliers';  // Add .js extension

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/supplier/registration" element={<SupplierRegistrationForm />} />
        <Route path="/supplier/view" element={<ViewSuppliers />} />
      </Routes>
    </Router>
  );
}

export default App;