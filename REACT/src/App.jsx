import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './layouts/header/Header';
import Sidebar from './layouts/sidebar/Sidebar';
import Home from './pages/home/Home';
import ClassDetail from './pages/classdetail/ClassDetail';
import Settings from './pages/settings/Settings';
import { HelpCircle } from 'lucide-react';
import './App.css';

const AppContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClassClick = (classData) => {
    setSelectedClass(classData);
    navigate('/class-detail');
  };

  const handleNavigate = (page) => {
    navigate(`/${page}`);
    setSelectedClass(null);
  };

  // Get current page from URL
  const currentPage = location.pathname.slice(1) || 'home';

  return (
    <div className="app">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        onClassClick={handleClassClick}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      
      <Routes>
        <Route path="/" element={<Home onClassClick={handleClassClick} />} />
        <Route path="/home" element={<Home onClassClick={handleClassClick} />} />
        <Route path="/class-detail" element={selectedClass ? <ClassDetail classData={selectedClass} /> : <Home onClassClick={handleClassClick} />} />
        <Route path="/calendar" element={<div style={{padding: '20px'}}>Calendar Page - Coming Soon</div>} />
        <Route path="/tasks" element={<div style={{padding: '20px'}}>Tasks Page - Coming Soon</div>} />
        <Route path="/users" element={<div style={{padding: '20px'}}>Users Page - Coming Soon</div>} />
        <Route path="/education" element={<div style={{padding: '20px'}}>Education Page - Coming Soon</div>} />
        <Route path="/archive" element={<div style={{padding: '20px'}}>Archive Page - Coming Soon</div>} />
       <Route path="/settings" element={<Settings />} />
      </Routes>
      
      <button className="help-btn">
        <HelpCircle size={24} />
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;