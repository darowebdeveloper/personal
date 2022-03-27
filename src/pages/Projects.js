import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import projectImage from '../images/project.gif';

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();
      setProjects(data);
    })();
  }, []);
  return (
    <Layout>
      <div className="">
        {/* The first part */}
        <div className="mb-20">
          <div className="text-center">
            <img src={projectImage} alt="project" className="inline-block" />
          </div>
          <p className="container mx-auto px-5  md:text-xl font-semibold text-center">
            “Give a man a program, frustrate him for a day. Teach a man to
            program, frustrate him for a lifetime. With software there are only
            two possibilites: either the users control the programme or the
            programme controls the users.”
          </p>
          <h1 className="text-center md:text-4xl font-bold mt-5">
            Developer Quotes
          </h1>
        </div>
        {/* The Second part */}
        <div className="uppercase font-bold bg-cyan-500 text-white text-center rounded-tl-full rounded-br-full py-8 md:mx-10">
          <h1 className="md:text-7xl text-2xl">The Game is...</h1>
          <h1 className="md:text-7xl text-2xl">Consistency</h1>
        </div>
        {/* The third part */}
        <div className="container mx-auto my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-10">
          {projects.length === 0
            ? 'Loading..'
            : projects.map((item) => (
                <div key={item.id}>
                  <div className="p-10 border-2 border-gray-400 text-center rounded-bl-3xl rounded-tr-3xl relative overflow-hidden">
                    <img
                      src={`https://robohash.org/${item.name}`}
                      alt={item.name}
                      className="w-full inline-block"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 flex-col opacity-0 hover:opacity-80 px-10">
                      <h1 className="text-2xl text-white font-semibold mb-5">
                        {item.name}
                      </h1>
                      <button className="border-2 rounded border-white py-2 px-5 hover:bg-teal-500 text-white">
                        DEMO
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
