import React from 'react';
import { UserPlus, Folder, MoreVertical } from 'lucide-react';
import './ClassCard.css';

const ClassCard = ({ title, subtitle, bgColor }) => {
  return (
    <div className="class-card">
      <div className="card-header" style={{ backgroundColor: bgColor }}>
        <div className="card-title">
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="card-avatar">C</div>
      </div>
      
      <div className="card-body"></div>
      
      <div className="card-footer">
        <button className="card-icon-btn">
          <UserPlus size={20} />
        </button>
        <button className="card-icon-btn">
          <Folder size={20} />
        </button>
        <button className="card-icon-btn">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default ClassCard;