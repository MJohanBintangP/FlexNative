import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Layout from '../../components/CoursePage/Layout';

// Data Kursus
const courses = [
  {
    id: 1,
    title: 'Intro to React Native',
    description: 'Pelajari dasar-dasar React Native dan cara membuat aplikasi mobile.',
    progress: 75, // Persentase progress
  },
  {
    id: 2,
    title: 'State Management dengan Redux',
    description: 'Memahami cara mengelola state di React Native menggunakan Redux.',
    progress: 50, // Persentase progress
  },
  {
    id: 3,
    title: 'Integrasi API di React Native',
    description: 'Belajar cara mengambil dan mengirim data menggunakan REST API.',
    progress: 25, // Persentase progress
  },
];

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Welcome to FlexNative, {user?.name || 'Pengguna'}</h1>
        <p className="text-gray-400 mb-8">Berikut adalah daftar kursus yang dapat Anda pelajari hari ini:</p>

        {/* Daftar Kursus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="p-6 bg-[#1E1F27] rounded-3xl border border-[#3E3F46] hover:border-blue-500 transition-all duration-300">
              <h2 className="text-xl font-semibold text-white mb-2">{course.title}</h2>
              <p className="text-gray-400">{course.description}</p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{course.progress}% Selesai</span>
                  <span>Lanjutkan</span>
                </div>
                <div className="w-full bg-[#3E3F46] rounded-full h-2.5 mt-2">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>

              {/* Tombol Mulai Belajar */}
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onClick={() => alert(`Memulai kursus: ${course.title}`)}>
                Mulai Belajar
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
