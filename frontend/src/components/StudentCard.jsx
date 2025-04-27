import React, { useState } from 'react';
import './StudentProfileCard.css';

const StudentProfileCard = ({ student, onEdit, onRemove }) => {
  const [expanded, setExpanded] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleRemove = async () => {
    setDeleting(true);
    await onRemove(student._id);
    setDeleting(false);
  };

  return (
    <div className={`profile-card ${expanded ? 'open' : ''}`}>
      <div className="card-top" onClick={() => setExpanded(!expanded)}>
        <div className="avatar-box">
          {student.profilePhoto ? (
            <img src={student.profilePhoto} alt="Profile" className="avatar" />
          ) : (
            <div className="avatar-placeholder">
              {student.firstName?.[0]?.toUpperCase()}
            </div>
          )}
        </div>

        <div className="info-block">
          <h2 className="full-name">
            {student.firstName} {student.lastName}
          </h2>
          <p className="email-text">{student.email}</p>
        </div>

        <div className="toggle-icon">{expanded ? '▲' : '▼'}</div>
      </div>

      <div className="card-details">
        <p><strong>ID:</strong> {student.studentId}</p>
        <p><strong>DOB:</strong> {student.dob?.substring(0, 10)}</p>
        <p><strong>Branch:</strong> {student.department}</p>
        <p><strong>Joined:</strong> {student.enrollmentYear}</p>
        <p><strong>Status:</strong> {student.isActive ? 'Active' : 'Inactive'}</p>

        <div className="action-buttons">
          <button className="btn edit" onClick={() => onEdit(student)}>
            ✏️ Modify
          </button>
          <button
            className={`btn delete ${deleting ? 'loading' : ''}`}
            onClick={handleRemove}
            disabled={deleting}
          >
            {deleting ? <span className="loader" /> : <>🗑️ Remove</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileCard;
