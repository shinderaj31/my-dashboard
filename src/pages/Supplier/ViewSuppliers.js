// File: src/pages/Supplier/ViewSuppliers.js
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Pencil, Trash2, Search, RefreshCcw } from 'lucide-react';
import './ViewSuppliers.css';

const ViewSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('all');

  const fetchSuppliers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/supplier/all');
      if (!response.ok) {
        throw new Error('Failed to fetch suppliers');
      }
      const data = await response.json();
      setSuppliers(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching suppliers:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  // Add the missing handler functions
  const handleBack = () => {
    window.location.href = '/';
  };

  const handleEdit = async (id) => {
    try {
      window.location.href = `/supplier/edit/${id}`;
    } catch (err) {
      console.error('Error editing supplier:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this supplier?')) {
      try {
        const response = await fetch(`http://localhost:8080/api/supplier/delete/${id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete supplier');
        }

        // Refresh the list after successful deletion
        fetchSuppliers();
      } catch (err) {
        console.error('Error deleting supplier:', err);
        alert('Failed to delete supplier');
      }
    }
  };

  // Enhanced filter function
  const filteredSuppliers = suppliers.filter(supplier => {
    const searchLower = searchTerm.toLowerCase();
    
    if (searchType === 'id') {
      return supplier.form.toLowerCase().includes(searchLower);
    } else {
      return (
        supplier.form.toLowerCase().includes(searchLower) ||
        supplier.supplierName.toLowerCase().includes(searchLower) ||
        supplier.email.toLowerCase().includes(searchLower) ||
        supplier.phoneNumber.includes(searchTerm)
      );
    }
  });

  return (
    <div className="view-suppliers-page">
      <div className="page-header">
        <button onClick={handleBack} className="back-button">
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
        <h1>View Suppliers</h1>
      </div>

      <div className="suppliers-container">
        <div className="table-controls">
          <div className="search-section">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder={searchType === 'id' ? "Search by Form Number..." : "Search in all fields..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="search-type-selector">
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="search-type-select"
              >
                <option value="all">Search All</option>
                <option value="id">Search by ID</option>
              </select>
            </div>
          </div>
          <button className="refresh-button" onClick={fetchSuppliers}>
            <RefreshCcw size={20} />
            Refresh
          </button>
        </div>

        {error && (
          <div className="error-message">
            Error: {error}
          </div>
        )}

        <div className="table-container">
          <table className="suppliers-table">
            <thead>
              <tr>
                <th>Form Number</th>
                <th>Supplier Name</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="loading-cell">Loading...</td>
                </tr>
              ) : filteredSuppliers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="empty-cell">No suppliers found</td>
                </tr>
              ) : (
                filteredSuppliers.map((supplier) => (
                  <tr key={supplier.form}>
                    <td>{supplier.form}</td>
                    <td>{supplier.supplierName}</td>
                    <td>{new Date(supplier.date).toLocaleDateString()}</td>
                    <td>{supplier.phoneNumber}</td>
                    <td>{supplier.email}</td>
                    <td className="actions-cell">
                      <button 
                        className="action-button edit"
                        onClick={() => handleEdit(supplier.form)}
                      >
                        <Pencil size={16} />
                        Edit
                      </button>
                      <button 
                        className="action-button delete"
                        onClick={() => handleDelete(supplier.form)}
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewSuppliers;