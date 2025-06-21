import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import { useEffect } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'FlexNative | Login';
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('https://flexnative.mjohanbintangp.tech/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login gagal');
        setLoading(false);
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);

      if (data.username) {
        localStorage.setItem('username', data.username);
        console.log('Username saved:', data.username);
      } else {
        console.warn('Username not found in login response');
      }

      if (data.role === 'admin') {
        navigate('/AdminDashboard');
      } else {
        navigate('/Home');
      }
    } catch (err) {
      console.error(err);
      setError('Gagal koneksi ke server');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-8">
        <div className="w-full md:w-1/2 max-w-md bg-white p-8 rounded-2xl shadow-md">
          <div className="flex justify-center mb-10 mt-2">
            <img src={logo} alt="FlexNative Logo" className="h-12" />
          </div>

          <h1 className="text-2xl font-bold mb-2 text-[#2B7FFF]">Selamat datang !</h1>
          <p className="text-gray-500 mb-6 text-sm">Masuk ke akun FlexNative</p>

          <form onSubmit={handleSubmit} className="w-full">
            {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">{error}</div>}

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-gray-700 mb-1 text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email kamu"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent transition-all text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block font-medium text-gray-700 mb-1 text-sm">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan password kamu"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent transition-all text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="cursor-pointer w-full bg-[#2B7FFF] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm" disabled={loading}>
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Masuk'
              )}
            </button>

            <p className="text-sm text-gray-600 mt-6 text-center">
              Belum punya akun?{' '}
              <span className="text-[#2B7FFF] hover:underline cursor-pointer font-medium" onClick={() => navigate('/Register')}>
                Daftar
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
