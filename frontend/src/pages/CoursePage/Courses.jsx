import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/CoursePage/Layout';
import courseImage1 from '../../assets/course1.png';
import courseImage2 from '../../assets/course2.png';
import courseImage3 from '../../assets/course3.png';
import courseImage4 from '../../assets/course4.png';
import courseImage5 from '../../assets/course5.png';
import courseImage6 from '../../assets/course6.png';

const defaultCourses = [
  {
    _id: 1,
    title: 'React Native Fundamentals',
    description: 'Pelajari dasar-dasar React Native termasuk setup environment, komponen inti, dan styling dasar',
    image: courseImage1,
    rating: 4.8,
    duration: '6 Jam',
    level: 'Pemula',
  },
  {
    _id: 2,
    title: 'UI Development dengan React Native',
    description: 'Membangun antarmuka pengguna modern dengan komponen lanjutan dan animasi',
    image: courseImage2,
    rating: 4.7,
    duration: '8 Jam',
    level: 'Menengah',
  },
  {
    _id: 3,
    title: 'React Native Advanced Concepts',
    description: 'Optimasi performa, integrasi native module, dan state management dengan Redux',
    image: courseImage3,
    rating: 4.9,
    duration: '10 Jam',
    level: 'Lanjutan',
  },
  {
    _id: 4,
    title: 'React Native Navigation',
    description: 'Pelajari berbagai jenis navigasi seperti Stack, Tab, dan Drawer menggunakan React Navigation',
    image: courseImage4,
    rating: 4.6,
    duration: '5 Jam',
    level: 'Menengah',
  },
  {
    _id: 5,
    title: 'Menggunakan API di React Native',
    description: 'Koneksi ke RESTful API, fetch data, dan tampilkan di aplikasi dengan aman dan efisien',
    image: courseImage5,
    rating: 4.7,
    duration: '7 Jam',
    level: 'Pemula',
  },
  {
    _id: 6,
    title: 'Deploy & Build Android/iOS',
    description: 'Mempersiapkan aplikasi untuk produksi dan upload ke Play Store dan App Store',
    image: courseImage6,
    rating: 4.8,
    duration: '6.5 Jam',
    level: 'Lanjutan',
  },
];

function Courses() {
  const [courses, setCourses] = useState(defaultCourses);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/courses')
      .then((res) => {
        const mergedCourses = [...res.data, ...defaultCourses];
        setCourses(mergedCourses.slice(0, 3));
      })
      .catch(() => setCourses(defaultCourses));
  }, []);

  return (
    <Layout>
      <div className="p-6">
        <div className="flex flex-col mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">React Native Courses</h1>
          <p className="text-gray-400 mb-4">Kuasa teknologi mobile development dengan kurikulum React Native profesional</p>
          <hr className="border-[#959595]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="bg-[#1E1F27] rounded-2xl border border-[#3E3F46] hover:border-blue-500 transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">{course.level}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-white">{course.title}</h2>
                  <span className="text-blue-500 text-sm flex items-center gap-1">⭐ {course.rating}</span>
                </div>

                <p className="text-gray-400 mb-4">{course.description}</p>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <button className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2" onClick={() => alert(`Memulai course: ${course.title}`)}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Start Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
