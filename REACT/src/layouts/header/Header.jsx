import React from 'react';
import { Menu, Plus, Grid3x3 } from 'lucide-react';
import './Header.css';
import profileImg from '../../assets/fado.jpg'; 
import classroomImg from '../../assets/download.svg'; 

const Header = ({ onMenuClick }) => {  // ← buraya əlavə et
  return (
    <header className="header">
      <div className="header-left">
        <button className="icon-btn" onClick={onMenuClick}>  {/* ← buraya əlavə et */}
          <Menu size={24} />
        </button>
        <div className="logo">
          <div className="logo-icon">
              <img 
            src={classroomImg}  
            alt="classroom" 
            className="classroom-img"
        />
          </div>
          <span className="logo-text">Classroom</span>
        </div>
      </div>
      
      <div className="header-right">
        <button className="icon-btn">
          <Plus size={24} />
        </button>
        <button className="icon-btn">
          <Grid3x3 size={20} />
        </button>
        <img 
          src={profileImg}  
          alt="Profile" 
          className="profile-img"
        />
      </div>
    </header>
  );
};

export default Header;