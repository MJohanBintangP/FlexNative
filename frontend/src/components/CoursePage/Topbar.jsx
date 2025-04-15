import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import iconSearch from '../../assets/Search.svg';

const Topbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownContainer = document.querySelector('.relative');
      if (!dropdownContainer?.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    window.location.href = '/';
  };

  return (
    <div className="flex ml-[16rem] border-b border-[#3E3F46]">
      <div className="ml-[2rem] mr-[2rem] py-3 flex justify-between w-full">
        {/* Search Bar */}
        <div className="flex items-center bg-[#14151D] rounded-full px-5 gap-12">
          <input className="text-[#949DA0]" type="button" value="Seacrh Here" />
          <img src={iconSearch} alt="icon search" />
        </div>

        {/* Informasi Pengguna */}
        <div className="relative flex items-center gap-4 cursor-pointer" onClick={toggleDropdown}>
          <div className="text-white font-semibold">{user?.name || 'Admin'}</div>
          <img
            src={user?.picture || 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1741843826~exp=1741847426~hmac=020df7e72bc4111c416046e5867e940eee11db39ec014e41951344443f172d3d&w=900'}
            alt="User Profile"
            className="w-10 h-10 rounded-full object-cover border border-[#3E3F46]"
          />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-[#1E1F27] rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li
                  className="px-6 py-2 text-white hover:bg-red-600 hover:text-white cursor-pointer rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLogout();
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
