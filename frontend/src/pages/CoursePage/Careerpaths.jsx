import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Layout from '../../components/CoursePage/Layout';

const careerPaths = [
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'Pelajari cara membangun antarmuka pengguna yang interaktif.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    description: 'Pelajari cara membangun server dan API untuk aplikasi.',
  },
  {
    id: 3,
    title: 'Mobile Developer',
    description: 'Pelajari cara membuat aplikasi mobile menggunakan React Native.',
  },
];

function CareerPaths() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      {/* Header */}
      <div className="p-6">
        <div className="flex flex-col mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">Career Paths</h1>
          <p className="text-gray-400 mb-4">Learn all you need to begin a new career as a mobile developer with react native senior.</p>
          <hr className="border-[#959595]" />
        </div>

        {/* Daftar Career Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path) => (
            <div key={path.id} className="p-6 bg-[#1E1F27] rounded-3xl border border-[#3E3F46] hover:border-blue-500 transition-all duration-300">
              <h2 className="text-xl font-semibold text-white mb-2">{path.title}</h2>
              <p className="text-gray-400">{path.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onClick={() => alert(`Memulai jalur karir: ${path.title}`)}>
                Mulai Jalur Ini
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CareerPaths;
