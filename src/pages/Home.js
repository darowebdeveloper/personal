import React from 'react';
import { FaJs, FaReact } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiGatsby,
  SiLaravel,
  SiRedux,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';
import Layout from '../components/Layout';
function Home() {
  return (
    <Layout>
      <div>
        {/* Banner */}
        <div className="h-screen bg-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 h-screen items-center md:border-4 md:border-white transform md:rotate-12 rotate-0 md:mx-11 bg-gray-800">
            <div className="md:h-1/2">
              {/* <lottie-player
                src="https://assets1.lottiefiles.com/private_files/lf30_obidsi0t.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player> */}
            </div>
            <div className="text-white font-bold px-4 transform md:-rotate-12">
              <h1 className="text-4xl md:text-7xl">
                Hi, This is Lok Kru <b className="text-yellow-500">DARO</b>
              </h1>
              <h1 className="text-xl md:text-4xl">
                Full Stack Web <b className="text-red-500">Hobbyst</b>
              </h1>
            </div>
          </div>
        </div>
        {/* Technologies */}
        <div className="mt-10 md:mt-28">
          <h1 className="mb-10 text-4xl md:text-7xl font-bold text-center text-amber-500">
            Technologies I'm using
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* first row */}
            <FaReact
              size={180}
              color="#5ED3F3"
              className="w-full text-center mt-20"
            />
            <FaJs
              size={180}
              color="#F5E11D"
              className="w-full text-center mt-20 md:animate-bounce"
            />
            <SiTailwindcss
              size={180}
              color="#38BDF8"
              className="w-full text-center mt-20"
            />
            <SiMysql
              size={180}
              color="#DD8900"
              className="w-full text-center mt-20 md:animate-bounce"
            />
            {/* second row */}
            <SiGatsby
              size={180}
              color="#633194"
              className="w-full text-center mt-20 md:animate-bounce"
            />
            <SiLaravel
              size={180}
              color="#e84435"
              className="w-full text-center mt-20"
            />
            <SiRedux
              size={180}
              color="#6C3FB2"
              className="w-full text-center mt-20 md:animate-bounce"
            />
            <SiMongodb
              size={180}
              color="#14A44D"
              className="w-full text-center mt-20"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
