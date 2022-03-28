import React from 'react';

function PageBanner({ children, image, subtitle, wave = false }) {
  return (
    <div className="mb-20 pt-10 ">
      <div className="text-center">
        <img src={image} alt="project" className="inline-block" />
      </div>
      {wave && (
        <div className="relative -top-16">
          <div className="bg-gradient-to-t from-gray-100 to-white h-14 "></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f3f4f5"
              fill-opacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,101.3C672,107,768,149,864,144C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      )}
      <p className="container mx-auto px-5 -mt-16  md:text-xl font-semibold text-center">
        {children}
      </p>
      <h1 className="text-center md:text-4xl font-bold mt-5">{subtitle}</h1>
    </div>
  );
}

export default PageBanner;
