import React from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
import contactImage from '../images/contact.gif';

function Contact() {
  return (
    <Layout>
      <div>
        <PageBanner image={contactImage} subtitle="Contact me" />
        <div className="w-screen flex justify-center">
          <form className="w-full md:w-1/2 block p-10 shadow-2xl">
            <h2 className="text-2xl font-semibold">
              Submit your questions here
            </h2>
            <input
              type="text"
              className="border border-gray-300 w-full rounded mt-5 py-1 px-2 shadow-lg"
              placeholder="Full name"
            />
            <input
              type="email"
              className="border border-gray-300 w-full rounded mt-5 py-1 px-2 shadow-lg"
              placeholder="Email"
            />
            <textarea
              className="border border-gray-300 w-full rounded mt-5 py-1 px-2 shadow-lg"
              placeholder="Question"
            />
            <button
              type="button"
              className="border rounded-md mt-3 bg-teal-500 text-white px-5 py-1 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
