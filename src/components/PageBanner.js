import React from 'react';

function PageBanner({ children, image, subtitle }) {
  return (
    <div className="mb-20">
      <div className="text-center">
        <img src={image} alt="project" className="inline-block" />
      </div>
      <p className="container mx-auto px-5  md:text-xl font-semibold text-center">
        {children}
      </p>
      <h1 className="text-center md:text-4xl font-bold mt-5">{subtitle}</h1>
    </div>
  );
}

export default PageBanner;
