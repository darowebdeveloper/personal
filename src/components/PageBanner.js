import React from 'react';

function PageBanner({ children, image, subtitle }) {
  return (
    <div className="mb-20 pt-10">
      <div className="text-center ">
        <img src={image} alt="project" className="inline-block" />
      </div>
      <div className="transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,224L26.7,234.7C53.3,245,107,267,160,240C213.3,213,267,139,320,117.3C373.3,96,427,128,480,165.3C533.3,203,587,245,640,224C693.3,203,747,117,800,106.7C853.3,96,907,160,960,192C1013.3,224,1067,224,1120,197.3C1173.3,171,1227,117,1280,122.7C1333.3,128,1387,192,1413,224L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
      <p className="container mx-auto px-5  md:text-xl font-semibold text-center">
        {children}
      </p>
      <h1 className="text-center md:text-4xl font-bold mt-5">{subtitle}</h1>
    </div>
  );
}

export default PageBanner;
