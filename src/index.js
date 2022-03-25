import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {
  FaBookReader,
  FaEnvelopeOpen,
  FaHome,
  FaSuperpowers,
} from 'react-icons/fa';
const menuItems = [
  { title: 'Home', key: '/', icon: <FaHome /> },
  { title: 'Projects', key: '/projects', icon: <FaSuperpowers /> },
  { title: 'Courses', key: '/courses', icon: <FaBookReader /> },
  { title: 'Contact', key: '/contact', icon: <FaEnvelopeOpen /> },
];
export const MenuContext = createContext(menuItems);
ReactDOM.render(
  <React.StrictMode>
    <MenuContext.Provider value={menuItems}>
      <App />
    </MenuContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
