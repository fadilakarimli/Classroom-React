import React from 'react';
import archiveImg from '../../assets/archived.svg';
import './Archive.css';

export default function Archive() {
  return (
    <div className="archive-container">
      <div className="archive-content">
        <img src={archiveImg} alt="Archive" className="archive-image" />
        <p className="archive-text">None of your classes have been archived</p>
        <a href="#" className="archive-link">What does this mean?</a>
      </div>
    </div>
  );
}