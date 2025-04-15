import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <Topbar />

      {/* Konten Utama */}
      <div className="flex-1 ml-64 p-6">{children}</div>
    </div>
  );
}

export default Layout;
