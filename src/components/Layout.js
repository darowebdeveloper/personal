import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="font-mont">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
