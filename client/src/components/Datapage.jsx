import React from 'react';
import { useLocation } from 'react-router-dom';
import './datapage.css';  // Ensure this is correct!

const DataPage = () => {
    const location = useLocation();
    const formData = location.state || {};

    return (
        <div className="data-page-container">
            <h2 className="data-page-title">User Data</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>Password:</strong> {formData.password}</p>
        </div>
    );
};

export default DataPage;
