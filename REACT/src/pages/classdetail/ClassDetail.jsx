import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Pencil, Video, Calendar, AlertTriangle, MoreVertical, Eye } from 'lucide-react';
import './ClassDetail.css';

const ClassDetail = () => {
  const location = useLocation();
  const { classId } = useParams();
  const classData = location.state || { title: classId, bgColor: '#546e7a' };

  return (
    <div className="class-detail">
      {/* Header Tabs */}
      <div className="class-tabs">
        <button className="tab active">Stream</button>
        <button className="tab">Classwork</button>
        <button className="tab">People</button>
        <button className="tab">Grades</button>
      </div>

      {/* Top Icons */}
      <div className="top-icons">
        <button className="top-icon-btn">
          <Video size={24} />
        </button>
        <button className="top-icon-btn">
          <Calendar size={24} />
        </button>
        <button className="top-icon-btn">
          <AlertTriangle size={24} />
        </button>
        <button className="top-icon-btn">
          <MoreVertical size={24} />
        </button>
      </div>

      {/* Banner */}
      <div className="class-banner" style={{ backgroundColor: classData.bgColor }}>
        <h1 className="banner-title">{classData.title}</h1>
        <button className="customize-btn">
          <Pencil size={18} />
          <span>Customize</span>
        </button>
        <button className="info-btn">
          <span>i</span>
        </button>
      </div>

      {/* Content */}
      <div className="class-content">
        {/* Left Side */}
        <div className="content-left">
          {/* Meet Card */}
          <div className="meet-card">
            <div className="meet-header">
              <div className="meet-logo">
                <Video size={24} color="#00897b" />
                <span>Meet</span>
              </div>
              <button className="icon-btn">
                <MoreVertical size={20} />
              </button>
            </div>
            <button className="join-btn">Join</button>
            <div className="meet-visibility">
              <Eye size={18} />
              <span>Visible to students</span>
            </div>
          </div>

          {/* Class Code Card */}
          <div className="code-card">
            <div className="code-header">
              <span>Class code</span>
              <button className="icon-btn">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="content-right">
          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="action-btn primary">
              <Pencil size={18} />
              <span>New announcement</span>
            </button>
            <button className="action-btn">
              <span>🔄</span>
              <span>Repost</span>
            </button>
          </div>

          {/* Announcement Post */}
          <div className="post-card">
            <div className="post-header">
              <img 
                src="https://via.placeholder.com/40" 
                alt="Profile" 
                className="post-avatar"
              />
              <div className="post-info">
                <div className="post-author">Kanan Amirov</div>
                <div className="post-date">Dec 29, 2025</div>
              </div>
              <button className="icon-btn">
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="post-content">
              npm i -g json-server@0.17.4
            </div>
            <button className="add-comment-btn">
              <span>💬</span>
              <span>Add comment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;