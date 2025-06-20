import { useState } from 'react';
import AdminNavbar from '../../components/adminPage/AdminNavbar';
import UserManagement from './UserManagement';
import CourseManagement from './CourseManagement';
import { useEffect } from 'react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    document.title = 'FlexNative | AdminDashboard';
  }, []);

  return (
    <div className="bg-white h-screen flex overflow-hidden">
      <aside className="w-76 bg-[#FBFBFB] h-screen flex-shrink-0 border-r-1 border-[#C7C7C7]">
        <div className="h-full flex flex-col overflow-hidden">
          <AdminNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto px-8 py-5">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'courses' && <CourseManagement />}
        </div>
      </main>
    </div>
  );
}
