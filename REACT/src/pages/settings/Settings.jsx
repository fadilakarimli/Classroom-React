import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import profileImg from '../../assets/fado.jpg'; 
import './Settings.css';

export default function Settings() {
  const [profileImage, setProfileImage] = useState(profileImg);
  const [emailNotifications, setEmailNotifications] = useState(true);
  
  // Comments toggles
  const [commentsOnPosts, setCommentsOnPosts] = useState(true);
  const [commentsMention, setCommentsMention] = useState(true);
  const [privateComments, setPrivateComments] = useState(true);
  
  // Enrolled classes toggles
  const [workFromTeachers, setWorkFromTeachers] = useState(true);
  const [returnedWork, setReturnedWork] = useState(true);
  const [invitationsStudent, setInvitationsStudent] = useState(true);
  const [dueDateReminders, setDueDateReminders] = useState(true);
  
  // Teaching classes toggles
  const [lateSubmissions, setLateSubmissions] = useState(true);
  const [resubmissions, setResubmissions] = useState(true);
  const [invitationsCoTeach, setInvitationsCoTeach] = useState(true);
  const [scheduledPost, setScheduledPost] = useState(true);
  
  // Class notifications expand
  const [classNotifOpen, setClassNotifOpen] = useState(false);

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
        {/* PROFILE SECTION */}
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

        {/* NOTIFICATIONS SECTION */}
        <div className="settings-section">
          <h2 className="section-title">Notifications</h2>
          
          {/* Email */}
          <div className="notifications-subsection">
            <h3 className="subsection-title">Email</h3>
            <p className="subsection-description">
              These settings apply to the notifications you get by email.{' '}
              <a href="#" className="link">Learn more</a>
            </p>
          </div>

          <div className="notification-item">
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

          {/* Comments */}
          <div className="notifications-subsection">
            <h3 className="subsection-title">Comments</h3>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Comments on your posts</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={commentsOnPosts}
                onChange={() => setCommentsOnPosts(!commentsOnPosts)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Comments that mention you</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={commentsMention}
                onChange={() => setCommentsMention(!commentsMention)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Private comments on work</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={privateComments}
                onChange={() => setPrivateComments(!privateComments)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {/* Classes you're enrolled in */}
          <div className="notifications-subsection">
            <h3 className="subsection-title">Classes you're enrolled in</h3>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Work and other posts from teachers</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={workFromTeachers}
                onChange={() => setWorkFromTeachers(!workFromTeachers)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Returned work and grades from your teachers</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={returnedWork}
                onChange={() => setReturnedWork(!returnedWork)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Invitations to join classes as a student</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={invitationsStudent}
                onChange={() => setInvitationsStudent(!invitationsStudent)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Due-date reminders for your work</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={dueDateReminders}
                onChange={() => setDueDateReminders(!dueDateReminders)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {/* Classes you teach */}
          <div className="notifications-subsection">
            <h3 className="subsection-title">Classes you teach</h3>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Late submissions of student work</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={lateSubmissions}
                onChange={() => setLateSubmissions(!lateSubmissions)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Resubmissions of student work</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={resubmissions}
                onChange={() => setResubmissions(!resubmissions)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Invitations to co-teach classes</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={invitationsCoTeach}
                onChange={() => setInvitationsCoTeach(!invitationsCoTeach)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <span className="toggle-label">Scheduled post published or failed</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={scheduledPost}
                onChange={() => setScheduledPost(!scheduledPost)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {/* Class notifications */}
          <div 
            className="class-notifications-header"
            onClick={() => setClassNotifOpen(!classNotifOpen)}
          >
            <div>
              <h3 className="subsection-title">Class notifications</h3>
              <p className="subsection-description">
                These settings apply to both your email and device notifications for each class
              </p>
            </div>
            {classNotifOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>

          {classNotifOpen && (
            <div className="class-notifications-content">
              <p className="no-classes-text">No classes to display</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}