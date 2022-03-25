import React from 'react';
import { FaJs, FaReact } from 'react-icons/fa';
import blobImage from '../images/blob.gif';
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
              <lottie-player
                src="https://assets1.lottiefiles.com/private_files/lf30_obidsi0t.json"
                background="transparent"
                speed="1"
                autoplay
              ></lottie-player>
            </div>
            <div className="text-white font-bold px-4 transform md:-rotate-12">
              <h1 className="text-4xl md:text-7xl">
                Hi, This is Lok Kru <b className="text-yellow-500">DARO</b>
              </h1>
              <h1 className="text-xl md:text-4xl">
                Full Stack Web <b className="text-cyan-500">Hobbyst</b>
              </h1>
            </div>
          </div>
        </div>
        {/* Technologies */}
        <div className="mt-10 md:mt-28">
          <h1 className="mb-10 text-4xl md:text-6xl font-bold text-center text-amber-500">
            Technologies I'm using
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4">
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
        {/* JS enthusiast */}
        <div className="my-20">
          <div className="text-center h-52 bg-sky-500  text-white">
            <h1 className="text-4xl md:text-6xl font-bold py-10">
              I'm a JavaScript enthusiast.
            </h1>
          </div>
          <div className="container mx-auto bg-gray-50 shadow-2xl -mt-14 md:-mt-16 rounded-lg md:hover:bg-gray-900 md:hover:text-white transition md:py-10">
            <div className="h-96">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_3ntisyac.json"
                background="transparent"
                speed="1"
                autoplay
              ></lottie-player>
            </div>
            <p className="max-w-5xl mx-auto md:text-2xl my-5 font-semibold px-5 text-center py-5">
              JavaScript is hard to learn but when you get the fundamentals, you
              can build anything. JavaScript is not that hard.
            </p>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="my-20">
          <div className="text-center h-52 bg-teal-500  text-white">
            <h1 className="text-4xl md:text-6xl font-bold py-10">
              My Dev Stack
            </h1>
          </div>
          <div className="container mx-auto bg-gray-50 shadow-2xl -mt-14 md:-mt-16 rounded-lg md:hover:bg-gray-900 md:hover:text-white transition md:py-10">
            <div className="h-96">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_dlw10cqe.json"
                background="transparent"
                speed="1"
                autoplay
              ></lottie-player>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-5">
              <div>
                <h2 className="text-2xl font-bold border-b-2 pb-2">
                  Front End
                </h2>
                <p className="font-semibold my-5 ">HTML/CSS</p>
                <p className="font-semibold my-5">JavaScript</p>
                <p className="font-semibold my-5">React/Redux</p>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold border-b-2 pb-2">UI/UX</h2>
                <p className="font-semibold my-5">Tailwind CSS</p>
                <p className="font-semibold my-5">Material UI</p>
                <p className="font-semibold my-5">Bootstrap</p>
              </div>
              <div className="text-right">
                <h2 className="text-2xl font-bold border-b-2 pb-2">Back End</h2>
                <p className="font-semibold my-5">Node/Express JS</p>
                <p className="font-semibold my-5">Laravel</p>
                <p className="font-semibold my-5">MySQL/MongoDB</p>
              </div>
            </div>
          </div>
        </div>
        {/* Blob */}
        <div>
          <div className="text-center h-52 bg-amber-500  text-white">
            <h1 className="text-4xl md:text-6xl font-bold pt-10 text-center">
              Lok Kru DARO
            </h1>
          </div>
          <div className="relative text-gray-800 -mt-20 ">
            <div className="md:h-3/4  mx-auto text-center">
              <img
                src={blobImage}
                alt="Blob"
                className="inline-block  rounded-lg"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <div>
                <h2 className="text-center md:text-xl mb-5 font-semibold">
                  សួស្តី​​! Hello! Konnichiwa!
                </h2>
                <pre className="md:text-xl">
                  {JSON.stringify(
                    {
                      name: 'PHAN Daro',
                      age: null,
                      gender: 'Male',
                      degree: "Master's",
                      country: 'Cambodia',
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
