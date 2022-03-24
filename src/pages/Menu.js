import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout';

function Menu() {
  const menuItems = [
    { title: 'Home', key: '/' },
    { title: 'Projects', key: '/projects' },
    { title: 'Courses', key: '/courses' },
    { title: 'Contact', key: '/contact' },
  ];
  return (
    <Layout>
      <div className="h-screen bg-gray-800">
        <div className="container mx-auto pt-20">
          {menuItems.map((item) => (
            <div key={item.key} className="px-4">
              <NavLink
                className={({ isActive }) =>
                  `bg-white w-full block rounded-md my-4 py-4 px-4`
                }
                to={item.key}
              >
                {item.title}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
