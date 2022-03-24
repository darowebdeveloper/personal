import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaAngleDoubleUp } from 'react-icons/fa';
function Header() {
  const menuItems = [
    { title: 'Home', key: '/' },
    { title: 'Projects', key: '/projects' },
    { title: 'Courses', key: '/courses' },
    { title: 'Contact', key: '/contact' },
  ];
  const [mobileView, setMobileView] = useState(false);
  return (
    <div className="text-white font-mont fixed inset-0 z-50">
      <div
        className={`flex flex-col md:flex-row md:justify-between md:items-center p-2 bg-gray-800 shadow-lg`}
      >
        <div className=" flex justify-between  md:flex-none">
          <h1 className="text-4xl font-semibold">DARO</h1>
          <button
            onClick={() => setMobileView((prev) => !prev)}
            className="md:hidden"
          >
            {mobileView ? (
              <FaAngleDoubleUp className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
        </div>
        <div className={`md:flex ${mobileView ? '' : 'hidden'}`}>
          {menuItems.map((item) => (
            <div key={item.key}>
              <NavLink
                className={({ isActive }) =>
                  `inline-block py-4 px-2 mx-0 md:mx-1 md:py-2 md:px-4 w-full md:w-auto md:p-4 mt-4 md:mt-0 hover:bg-white hover:text-green-800 rounded-md ${
                    isActive ? 'bg-white text-green-800' : ''
                  }`
                }
                to={item.key}
              >
                {item.title}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
