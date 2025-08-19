import React from 'react';

function Sidebar() {
  return (
    <>
      <div className="m-3 position-fixed h-100 d-flex flex-column justify-content-between" style={{ width: '250px' }}>
        {/* Top Section */}
        <div>
          {/* Logo */}
          <div className="mb-4 px-2">
            <img className="logo-text" src="src/assets/text.png" alt="Logo" style={{ width: '120px', cursor: 'pointer' }} />
          </div>

          {/* Menu Items */}
          <div className="d-flex flex-column gap-3">
            <MenuItem icon="bi-house-door" text="Home" />
            <MenuItem icon="bi-search" text="Search" />
            <MenuItem icon="bi-compass" text="Explore" />
            <MenuItem icon="bi-play-btn" text="Reels" />
            <MenuItem icon="bi-chat-dots" text="Messages" />
            <MenuItem icon="bi-heart" text="Notifications" />
            <MenuItem icon="bi-plus-square" text="Create" />
            <MenuItem icon="bi-person-circle" text="Profile" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="d-flex flex-column gap-3 mb-3">
          <MenuItem icon="bi-threads" text="Threads" />
          <MenuItem icon="bi-list" text="More" />
        </div>
      </div>
    </>
  );
}

function MenuItem({ icon, text }) {
  return (
    <div
      className="d-flex align-items-center gap-3 px-2 py-2 menu-item"
      style={{ borderRadius: '8px', cursor: 'pointer', transition: 'background 0.2s' }}
    >
      <i className={`bi ${icon}`} style={{ fontSize: '1.3rem' }}></i>
      <span style={{ fontSize: '1rem', fontWeight: '500' }}>{text}</span>
    </div>
  );
}

export default Sidebar;
