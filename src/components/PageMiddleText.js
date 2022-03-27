import React from 'react';

function PageMiddleText({ firstLine, secondLine, bgColor = 'bg-cyan-500' }) {
  return (
    <div
      className={`uppercase font-bold ${bgColor} text-white text-center rounded-tl-full rounded-br-full py-8 md:mx-10`}
    >
      <h1 className="md:text-7xl text-2xl">{firstLine}</h1>
      <h1 className="md:text-7xl text-2xl">{secondLine}</h1>
    </div>
  );
}

export default PageMiddleText;
