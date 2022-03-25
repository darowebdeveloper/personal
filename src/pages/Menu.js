import React, { useContext } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '..';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InstallPWA from '../components/InstallPWA';

function Menu() {
  const menuItems = useContext(MenuContext);
  return (
    <>
      <Header />
      <div className="h-screen bg-gray-800">
        <div className="container mx-auto pt-20">
          {menuItems.map((item) => (
            <div key={item.key} className="px-4 text-xl">
              <NavLink
                className={({ isActive }) =>
                  `bg-white w-full flex items-center rounded-md my-4 py-4 px-4`
                }
                to={item.key}
              >
                <div className="mr-5">{item.icon}</div>
                <div>{item.title}</div>
                <FaChevronRight className="ml-auto" />
              </NavLink>
            </div>
          ))}
          <InstallPWA />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Menu;
