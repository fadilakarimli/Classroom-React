import React from 'react';
import Header from './layouts/header/Header';
import Sidebar from './layouts/sidebar/Sidebar';
import Home from './pages/home/Home';
import { HelpCircle } from 'lucide-react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Home />
      
      <button className="help-btn">
        <HelpCircle size={24} />
      </button>
    </div>
  );
};

export default App;