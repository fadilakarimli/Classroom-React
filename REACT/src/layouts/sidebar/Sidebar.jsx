import React from 'react';
import { Home, Calendar, ClipboardList, Users, GraduationCap, Archive, Settings } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <button className="sidebar-btn active">
        <Home size={24} />
      </button>
      <button className="sidebar-btn">
        <Calendar size={24} />
      </button>
      <button className="sidebar-btn notification">
        <ClipboardList size={24} />
        <span className="notification-dot"></span>
      </button>
      <button className="sidebar-btn">
        <Users size={24} />
      </button>
      <button className="sidebar-btn">
        <GraduationCap size={24} />
      </button>
      <button className="sidebar-btn">
        <Archive size={24} />
      </button>
      <button className="sidebar-btn settings-btn">
        <Settings size={24} />
      </button>
    </aside>
  );
};

export default Sidebar;