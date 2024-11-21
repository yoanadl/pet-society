import React from 'react';
import './Sidebar.css';

function Sidebar({ children }) {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
