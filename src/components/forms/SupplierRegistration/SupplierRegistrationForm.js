// File: src/components/forms/SupplierRegistration/SupplierRegistrationForm.js
import React, { useState } from 'react';
import './SupplierRegistrationForm.css';
import { ArrowLeft } from 'lucide-react';

const SupplierRegistrationForm = () => {
  const [formData, setFormData] = useState({
    form: 'FORM' + Math.random().toString(36).substr(2, 8).toUpperCase(),  // Auto Generated
    revision: '',
    date: new Date().toISOString().split('T')[0],
    supplierName: '',
    address: '',
    phoneNumber: '',
    fax: '',
    email: '',
    qualityManager: '',
    qualityManagerPhone: '',
    qualityManagerEmail: '',
    salesRepresentative: '',
    coreProduct: '',
    businessExperience: '',
    isISORegistered: 'N',
    isoStandard: '',
    hasDGCAApproval: 'N',
    registrationPlans: '',
    totalEmployees: '',
    operatingShifts: '',
    hasQualityManual: 'N',
    annualTurnover: '',
    // Quality Process
    qualityAssuranceIndependence: 'N',
    hasDocumentedSystem: 'N',
    hasDocumentedProcedures: 'N',
    meetCustomerSpecifications: 'N',
    // Incoming Inspection
    hasIncomingProcess: 'N',
    hasSamplingPlan: 'N',
    maintainsInspectionResults: 'N',
    maintainsTraceability: 'N',
    separatesMaterial: 'N',
    hasIsolationProcedure: 'N',
    referToCustomer: 'N',
  });

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/supplier/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Supplier registered successfully!');
        window.location.href = '/';
      } else {
        alert('Failed to register supplier. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering supplier.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'tel' ? value.replace(/[^0-9+]/g, '') : value
    }));
  };

  return (
    <div className="registration-page">
      <div className="registration-header">
        <button onClick={handleBack} className="back-button">
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
      </div>
      <div className="supplier-registration-form">
        <h2>Supplier Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Basic Information Section */}
          <section className="form-section">
            <h3>Basic Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Form Number</label>
                <input 
                  type="text" 
                  value={formData.form} 
                  disabled 
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Revision <span className="required">*</span></label>
                <input 
                  type="number"
                  name="revision"
                  value={formData.revision}
                  onChange={handleChange}
                  className="form-control"
                  required
                  min="0"
                  max="999999"
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date"
                  value={formData.date}
                  disabled
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Supplier Name <span className="required">*</span></label>
                <input 
                  type="text"
                  name="supplierName"
                  value={formData.supplierName}
                  onChange={handleChange}
                  maxLength={50}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Address <span className="required">*</span></label>
                <textarea 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  maxLength={150}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="form-section">
            <h3>Contact Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Phone Number <span className="required">*</span></label>
                <input 
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="form-control"
                  required
                  maxLength={12}
                  placeholder="+91xxxxxxxxxx"
                />
              </div>

              <div className="form-group">
                <label>Fax</label>
                <input 
                  type="text"
                  name="fax"
                  value={formData.fax}
                  onChange={handleChange}
                  className="form-control"
                  maxLength={30}
                />
              </div>

              <div className="form-group">
                <label>Email <span className="required">*</span></label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                  maxLength={50}
                />
              </div>
            </div>
          </section>

          {/* Quality Management Section */}
          <section className="form-section">
            <h3>Quality Management</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Quality Manager <span className="required">*</span></label>
                <input 
                  type="text"
                  name="qualityManager"
                  value={formData.qualityManager}
                  onChange={handleChange}
                  className="form-control"
                  required
                  maxLength={30}
                />
              </div>

              <div className="form-group">
                <label>Quality Manager Phone <span className="required">*</span></label>
                <input 
                  type="tel"
                  name="qualityManagerPhone"
                  value={formData.qualityManagerPhone}
                  onChange={handleChange}
                  className="form-control"
                  required
                  maxLength={12}
                  placeholder="+91xxxxxxxxxx"
                />
              </div>

              <div className="form-group">
                <label>Quality Manager Email <span className="required">*</span></label>
                <input 
                  type="email"
                  name="qualityManagerEmail"
                  value={formData.qualityManagerEmail}
                  onChange={handleChange}
                  className="form-control"
                  required
                  maxLength={40}
                />
              </div>

              <div className="form-group">
                <label>Sales Representative <span className="required">*</span></label>
                <input 
                  type="email"
                  name="qualityManagerEmail"
                  value={formData.qualityManagerEmail}
                  onChange={handleChange}
                  className="form-control"
                  required
                  maxLength={40}
                />
              </div>

            </div>
          </section>

          {/* Supplier Analysis Section */}
<section className="form-section">
  <h3>Supplier Analysis</h3>
  <div className="form-grid">
    <div className="form-group full-width">
      <label>Core Products/Process <span className="required">*</span></label>
      <textarea 
        name="coreProduct"
        value={formData.coreProduct}
        onChange={handleChange}
        className="form-control"
        required
        maxLength={500}
      />
    </div>

    <div className="form-group full-width">
      <label>Business Experience</label>
      <textarea 
        name="businessExperience"
        value={formData.businessExperience}
        onChange={handleChange}
        className="form-control"
        maxLength={500}
        placeholder="How long have you been in this type of work?"
      />
    </div>

    <div className="form-group">
      <label>ISO Registered? <span className="required">*</span></label>
      <select
        name="isISORegistered"
        value={formData.isISORegistered}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
      </select>
    </div>

    <div className="form-group">
      <label>ISO Standard</label>
      <input 
        type="text"
        name="isoStandard"
        value={formData.isoStandard}
        onChange={handleChange}
        className="form-control"
      />
    </div>

    <div className="form-group">
      <label>DGCA/CAR 145 Approval <span className="required">*</span></label>
      <select
        name="hasDGCAApproval"
        value={formData.hasDGCAApproval}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
      </select>
    </div>

    <div className="form-group">
      <label>Registration Plans</label>
      <input 
        type="text"
        name="registrationPlans"
        value={formData.registrationPlans}
        onChange={handleChange}
        className="form-control"
        maxLength={50}
        placeholder="If not registered, plans to do so?"
      />
    </div>

    <div className="form-group">
      <label>Total Employees</label>
      <input 
        type="number"
        name="totalEmployees"
        value={formData.totalEmployees}
        onChange={handleChange}
        className="form-control"
        max="9999"
      />
    </div>

    <div className="form-group">
      <label>Operating Shifts</label>
      <input 
        type="number"
        name="operatingShifts"
        value={formData.operatingShifts}
        onChange={handleChange}
        className="form-control"
        max="999"
      />
    </div>

    <div className="form-group">
      <label>Quality Manual <span className="required">*</span></label>
      <select
        name="hasQualityManual"
        value={formData.hasQualityManual}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
      </select>
    </div>

    <div className="form-group">
      <label>Annual Turnover (INR) <span className="required">*</span></label>
      <input 
        type="number"
        name="annualTurnover"
        value={formData.annualTurnover}
        onChange={handleChange}
        className="form-control"
        required
        max="9999999999"
      />
    </div>
  </div>
</section>

{/* Quality Process Section */}
<section className="form-section">
  <h3>Quality Process</h3>
  <div className="form-grid">
    <div className="form-group tooltip-container">
      <label>Quality Assurance Independence <span className="required">*</span></label>
      <select
        name="qualityAssuranceIndependence"
        value={formData.qualityAssuranceIndependence}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Does quality assurance have independence form Mfg.? </span>

    </div>

    <div className="form-group tooltip-container">
      <label>Documented System for Actions <span className="required">*</span></label>
      <select
        name="hasDocumentedSystem"
        value={formData.hasDocumentedSystem}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Do you have documented operative system for internal & External corrective & Preventive actions</span>

    </div>

    <div className="form-group tooltip-container">
      <label>Documented Procedures <span className="required">*</span></label>
      <select
        name="hasDocumentedProcedures"
        value={formData.hasDocumentedProcedures}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Are there documented procedure for identification ,collation, filing, storage, & maintenance pf quality Records??</span>

    </div>

    <div className="from-group tooltip-container">
      <label> System Assurance <span className="required">*</span></label>
      <select
        name="separatesMaterial"
        value={formData.separatesMaterial}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Does your system assured that product shipped meet customer applicable revision of specifications?</span>

    </div>

  </div>
</section>

{/* Incoming Inspection Section */}
<section className="form-section">
  <h3>Incoming Inspection</h3>
  <div className="form-grid">
    <div className="form-group tooltip-container">
      <label>Documented Process <span className="required">*</span></label>
      <select
        name="hasIncomingProcess"
        value={formData.hasIncomingProcess}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">is incoming process documented ?</span>

    </div>

    <div className="form-group tooltip-container">
      <label>Sampling Plan Used <span className="required">*</span></label>
      <select
        name="hasSamplingPlan"
        value={formData.hasSamplingPlan}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">What sampling plan is used for incoming inspection?</span>

    </div>

    <div className="form-group tooltip-container">
      <label>Maintains Inspection Results <span className="required">*</span></label>
      <select
        name="maintainsInspectionResults"
        value={formData.maintainsInspectionResults}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Is Objective evidence of receiving inspection results maintained in file??</span>

    </div>

    <div className="form-group tooltip-container">
      <label>Maintains Traceability <span className="required">*</span></label>
      <select
        name="maintainsTraceability"
        value={formData.maintainsTraceability}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">is not number or other traceability identification maintained?</span>

    </div>

    <div className="form-group tooltip-container">
      <label>Separates Material <span className="required">*</span></label>
      <select
        name="separatesMaterial"
        value={formData.separatesMaterial}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">is incoming material kept separate from inspected material ?</span>

    </div>

    <div className="form-group  tooltip-container">
      <label>Isolating Non-Confirming Material <span className="required">*</span></label>
      <select
        name="separatesMaterial"
        value={formData.separatesMaterial}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">is there any procedure for isolating nonconforming material?</span>

    </div>

    <div className="from-group tooltip-container">
      <label>Customer Disposition <span className="required">*</span></label>
      <select
        name="separatesMaterial"
        value={formData.separatesMaterial}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Are deviation that affect the customer's requirement referred to customers for disposition?</span>

    </div>


  </div>
</section>


{/* Measuring Equipment Section */}
<section className="form-section">
  <h3>Measuring Equipment</h3>
  <div className="form-grid">
    <div className="form-group tooltip-container">
      <label>Equipment Calibrated <span className="required">*</span></label>
      <select
        name="isEquipmentCalibrated"
        value={formData.isEquipmentCalibrated}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Indicates if measuring equipment is regularly calibrated</span>
    </div>

    <div className="form-group tooltip-container">
      <label>Periodic Certification <span className="required">*</span></label>
      <select
        name="hasPeriodicCertification"
        value={formData.hasPeriodicCertification}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Regular certification and maintenance of records for recalibration</span>
    </div>

    <div className="form-group tooltip-container">
      <label>Sufficient Equipment <span className="required">*</span></label>
      <select
        name="hasSufficientEquipment"
        value={formData.hasSufficientEquipment}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Availability of adequate gauges and test equipment</span>
    </div>
  </div>
</section>

{/* Process Control Section */}
<section className="form-section">
  <h3>Process Control</h3>
  <div className="form-grid">
    <div className="form-group tooltip-container">
      <label>Work Instructions Available <span className="required">*</span></label>
      <select
        name="hasWorkInstructions"
        value={formData.hasWorkInstructions}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Written work instructions available at workstations</span>
    </div>

    <div className="form-group tooltip-container">
      <label>Final Inspection Evidence <span className="required">*</span></label>
      <select
        name="hasInspectionEvidence"
        value={formData.hasInspectionEvidence}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Products show evidence of final inspection acceptance</span>
    </div>

    <div className="form-group tooltip-container">
      <label>Statistical Methods Used <span className="required">*</span></label>
      <select
        name="usesStatisticalMethods"
        value={formData.usesStatisticalMethods}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Statistical methods are used to control the process</span>
    </div>
  </div>
</section>

{/* Document Control Section */}
<section className="form-section">
  <h3>Document Control</h3>
  <div className="form-grid">
    <div className="form-group tooltip-container">
      <label>Customer Document Control <span className="required">*</span></label>
      <select
        name="hasCustomerDocControl"
        value={formData.hasCustomerDocControl}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Procedures in place for control of customer-supplied documents</span>
    </div>

    <div className="form-group tooltip-container">
      <label>Revision Control Method <span className="required">*</span></label>
      <select
        name="hasRevisionControl"
        value={formData.hasRevisionControl}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Method for handling revision changes and obsolete documents</span>
    </div>
  </div>
</section>

{/* Procurement Control Section */}
<section className="form-section">
  <h3>Procurement Control</h3>
  <div className="form-grid">
    <div className="form-group tooltip-container">
      <label>Supplier Evaluation <span className="required">*</span></label>
      <select
        name="evaluatesSuppliers"
        value={formData.evaluatesSuppliers}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Quality capabilities of suppliers evaluated prior to procurement</span>
    </div>

    <div className="form-group tooltip-container">
      <label>Approved Supplier List <span className="required">*</span></label>
      <select
        name="hasApprovedSupplierList"
        value={formData.hasApprovedSupplierList}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Do you have approved supplier list</span>

    </div>

    <div className="form-group tooltip-container">
      <label>Test Reports Obtained <span className="required">*</span></label>
      <select
        name="obtainsTestReports"
        value={formData.obtainsTestReports}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Certified test reports and conformance certifications obtained</span>
    </div>

    <div className="form-group tooltip-container">
      <label>Capable of in Time Delivery<span className="required">*</span></label>
      <select
        name="obtainsTestReports"
        value={formData.obtainsTestReports}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Is Supplier capable for in time delivery?</span>
    </div>

    <div className="form-group tooltip-container">
      <label>Supplier Competency<span className="required">*</span></label>
      <select
        name="obtainsTestReports"
        value={formData.obtainsTestReports}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Is Supplier competent with respect to market to market price?</span>
    </div>



  </div>
</section>

{/* Plant Area Section */}
<section className="form-section">
  <h3>Plant Area</h3>
  <div className="form-grid">
    <div className="form-group tooltip-container">
      <label>Safety Programs <span className="required">*</span></label>
      <select
        name="hasSafetyPrograms"
        value={formData.hasSafetyPrograms}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Adequate area and safety programs in place</span>
    </div>

    <div className="form-group tooltip-container">
      <label>Housekeeping Procedures <span className="required">*</span></label>
      <select
        name="hasHousekeepingProcedures"
        value={formData.hasHousekeepingProcedures}
        onChange={handleChange}
        className="form-control"
        required
      >
        <option value="Y">Yes</option>
        <option value="N">No</option>
        <option value="NA">Not Applicable</option>
      </select>
      <span className="tooltip">Procedures in place for housekeeping</span>
    </div>
  </div>
</section>


          <div className="form-actions">
            <button type="submit" className="btn-submit">Submit</button>
            <button type="button" className="btn-cancel" onClick={handleBack}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupplierRegistrationForm;