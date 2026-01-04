import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Calendar, ClipboardList, Users, GraduationCap, Archive, Settings, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const [teachingOpen, setTeachingOpen] = useState(false);
  const [enrolledOpen, setEnrolledOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    if (onClose) onClose();
  };

  const isActive = (path) => {
    return location.pathname === path || (path === '/home' && location.pathname === '/');
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <button 
          className={`sidebar-btn ${isActive('/home') ? 'active' : ''}`}
          onClick={() => handleNavigation('/home')}
        >
          <Home size={24} />
        </button>
        <button 
          className={`sidebar-btn ${isActive('/calendar') ? 'active' : ''}`}
          onClick={() => handleNavigation('/calendar')}
        >
          <Calendar size={24} />
        </button>
        <button 
          className={`sidebar-btn ${isActive('/tasks') ? 'active' : ''} notification`}
          onClick={() => handleNavigation('/tasks')}
        >
          <ClipboardList size={24} />
          <span className="notification-dot"></span>
        </button>
        <button 
          className={`sidebar-btn ${isActive('/users') ? 'active' : ''}`}
          onClick={() => handleNavigation('/users')}
        >
          <Users size={24} />
        </button>
        <button 
          className={`sidebar-btn ${isActive('/education') ? 'active' : ''}`}
          onClick={() => handleNavigation('/education')}
        >
          <GraduationCap size={24} />
        </button>
        <button 
          className={`sidebar-btn ${isActive('/archive') ? 'active' : ''}`}
          onClick={() => handleNavigation('/archive')}
        >
          <Archive size={24} />
        </button>
        <button 
          className={`sidebar-btn settings-btn ${isActive('/settings') ? 'active' : ''}`}
          onClick={() => handleNavigation('/settings')}
        >
          <Settings size={24} />
        </button>
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      
      <aside className={`sidebar-mobile ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          
          <div 
            className={`sidebar-item ${isActive('/home') ? 'active' : ''}`}
            onClick={() => handleNavigation('/home')}
          >
            <Home size={24} />
            <span>Home</span>
          </div>

          <div 
            className={`sidebar-item ${isActive('/calendar') ? 'active' : ''}`}
            onClick={() => handleNavigation('/calendar')}
          >
            <Calendar size={24} />
            <span>Calendar</span>
          </div>

          <div 
            className={`sidebar-item notification-item ${isActive('/tasks') ? 'active' : ''}`}
            onClick={() => handleNavigation('/tasks')}
          >
            <ClipboardList size={24} />
            <span>Gemini</span>
            <span className="notification-badge"></span>
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-item expandable" 
              onClick={() => setTeachingOpen(!teachingOpen)}
            >
              <Users size={24} />
              <span>Teaching</span>
              {teachingOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            
            {teachingOpen && (
              <div className="sidebar-submenu">
                <div className="sidebar-item">
                  <CreditCard size={24} />
                  <span>To review</span>
                </div>
                <div className="sidebar-item class-item">
                  <span className="class-icon">P</span>
                  <span>PTP101</span>
                </div>
              </div>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-item expandable" 
              onClick={() => setEnrolledOpen(!enrolledOpen)}
            >
              <GraduationCap size={24} />
              <span>Enrolled</span>
              {enrolledOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            
            {enrolledOpen && (
              <div className="sidebar-submenu">
                <div className="sidebar-item">
                  <ClipboardList size={24} />
                  <span>To-do</span>
                </div>
                <div className="sidebar-item class-item">
                  <span className="class-icon blue">P</span>
                  <span>PB103</span>
                </div>
                <div className="sidebar-item class-item">
                  <span className="class-icon orange">E</span>
                  <span>EL225</span>
                </div>
              </div>
            )}
          </div>

          <div 
            className={`sidebar-item ${isActive('/archive') ? 'active' : ''}`}
            onClick={() => handleNavigation('/archive')}
          >
            <Archive size={24} />
            <span>Archived classes</span>
          </div>

          <div 
            className={`sidebar-item ${isActive('/settings') ? 'active' : ''}`}
            onClick={() => handleNavigation('/settings')}
          >
            <Settings size={24} />
            <span>Settings</span>
          </div>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;