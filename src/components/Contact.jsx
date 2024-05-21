import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 to-red-500 text-white p-4">
      <div className="bg-white bg-opacity-25 p-8 rounded-lg shadow-xl max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">
          We would love to hear from you! Whether you have a question about our service, feedback, or anything else, our team is ready to answer all your questions.
        </p>
        <form className="w-full max-w-lg mx-auto">
          <div className="mb-6">
            <label className="block text-left text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="name" 
              type="text" 
              placeholder="Your name" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="email" 
              placeholder="Your email" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="message" 
              rows="5" 
              placeholder="Your message"></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button 
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
