import React, { useState } from 'react';
import './Settings.css';

export default function Settings() {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/80');
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-content">
        <div className="settings-section">
          <h2 className="section-title">Profile</h2>
          
          <div className="profile-picture-section">
            <p className="section-label">Profile picture</p>
            <div className="profile-picture-container">
              <img src={profileImage} alt="Profile" className="profile-image" />
              <label htmlFor="file-input" className="change-button">
                Change
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </div>
          </div>

          <div className="account-settings-section">
            <h3 className="subsection-title">Account settings</h3>
            <p className="subsection-description">
              Change your password and security options, and access other Google services.{' '}
              <a href="#" className="link">Manage</a>
            </p>
          </div>

          <div className="change-name-section">
            <h3 className="subsection-title">Change name</h3>
            <p className="subsection-description">
              To change your name, ask your admin.{' '}
              <a href="#" className="link">Learn more</a>
            </p>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">Notifications</h2>
          
          <div className="notifications-section">
            <h3 className="subsection-title">Email</h3>
            <p className="subsection-description">
              These settings apply to the notifications you get by email.{' '}
              <a href="#" className="link">Learn more</a>
            </p>
          </div>

          <div className="email-toggle-section">
            <span className="toggle-label">Allow email notifications</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}