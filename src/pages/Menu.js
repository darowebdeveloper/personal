import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '..';
import Layout from '../components/Layout';

function Menu() {
  const menuItems = useContext(MenuContext);
  return (
    <Layout>
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
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
