import React from 'react';
import Layout from '../components/Layout';
import projectImage from '../images/project.gif';

function Projects() {
  return (
    <Layout>
      <div className="">
        <div className="h-screen">
          <div className="md:h-3/4 text-center">
            <img src={projectImage} alt="project" className="inline-block" />
          </div>
          <p className="md:text-xl font-semibold text-center -mt-10">
            “Give a man a program, frustrate him for a day. Teach a man to
            program, frustrate him for a lifetime. With software there are only
            two possibilites: either the users control the programme or the
            programme controls the users.”
          </p>
          <h1 className="text-center md:text-4xl font-bold mt-5">
            Developer Quotes
          </h1>
        </div>
        <div className="uppercase font-bold bg-cyan-500 text-white text-center rounded-tl-full rounded-br-full py-8 md:mx-10">
          <h1 className="md:text-7xl text-2xl">The Game is...</h1>
          <h1 className="md:text-7xl text-2xl">Consistency</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
