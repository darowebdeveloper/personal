import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaAngleDoubleUp } from 'react-icons/fa';
import { MenuContext } from '..';
function Header() {
  const menuItems = useContext(MenuContext);
  return (
    <div className="text-white  bg-gray-800 font-mont fixed inset-x-0 z-50 shadow-lg ">
      <div
        className={`flex flex-col md:flex-row md:justify-between md:items-center p-2 md:container md:mx-auto`}
      >
        <div className=" flex justify-between  md:flex-none ">
          <NavLink to="/" className="text-4xl font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-red-300 to-red-500">
              D
            </span>
            A
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-300 to-yellow-500">
              RO
            </span>
          </NavLink>
        </div>
        <div
          className={`flex fixed md:static inset-x-0 bottom-0 justify-between bg-gray-900 md:bg-gray-800 px-4 md:px-0`}
        >
          {menuItems.map((item) => (
            <div key={item.key}>
              <NavLink
                className={({ isActive }) =>
                  `inline-block py-4 pb-8 md:pb-0 mx-0 md:mx-1 md:py-2 md:px-4 w-full md:w-auto md:p-4 md:hover:bg-white md:hover:text-yellow-500 rounded-t-md md:rounded-md h-full  ${
                    isActive ? 'md:bg-white text-yellow-500' : ''
                  }`
                }
                to={item.key}
              >
                <div className="text-2xl  px-5">{item.icon}</div>
                <div className="hidden md:block text-center">{item.title}</div>
              </NavLink>
            </div>
          ))}
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `md:hidden flex justify-center items-center pb-6 md:pb-0 ${
                isActive ? 'text-yellow-500 ' : ''
              }`
            }
            children={({ isActive }) =>
              isActive ? (
                <FaAngleDoubleUp className="text-3xl" />
              ) : (
                <FaBars className="text-3xl" />
              )
            }
          ></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
