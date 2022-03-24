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
    <div className="text-white h-20 md:h-auto bg-gray-800 font-mont fixed inset-x-0 bottom-0  md:bottom-auto z-50 shadow-lg ">
      <div
        className={`relative flex flex-col md:flex-row md:justify-between md:items-center p-2 md:container md:mx-auto`}
      >
        <div className=" flex justify-between  md:flex-none ">
          <h1 className="text-4xl font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-red-300 to-red-500">
              D
            </span>
            A
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-300 to-yellow-500">
              RO
            </span>
          </h1>
          <button
            onClick={() => setMobileView((prev) => !prev)}
            className="md:hidden"
          >
            {mobileView ? (
              <FaBars className="text-3xl" />
            ) : (
              <FaAngleDoubleUp className="text-3xl" />
            )}
          </button>
        </div>
        <div
          className={`md:flex-row absolute md:static  bottom-14 right-0  md:bottom-auto md:right-auto flex text-right md:text-left flex-col-reverse pt-16 md:pt-0 h-screen md:h-auto bg-gray-800 w-96 md:w-auto ${
            mobileView ? 'hidden' : ''
          }`}
        >
          {menuItems.map((item) => (
            <div key={item.key}>
              <NavLink
                className={({ isActive }) =>
                  `inline-block pr-7 md:pr-2 py-4 px-2 mx-0 md:mx-1 md:py-2 md:px-4 w-full md:w-auto md:p-4 mt-4 md:mt-0 hover:bg-white hover:text-yellow-500 rounded-md ${
                    isActive ? 'bg-white text-yellow-500' : ''
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
