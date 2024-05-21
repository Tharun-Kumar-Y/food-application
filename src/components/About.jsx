import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 text-white p-4">
      <div className="bg-white bg-opacity-25 p-8 rounded-lg shadow-xl max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold">Foodie Express</span>! Your one-stop solution for quick and delicious food deliveries. Whether you're craving a late-night snack or a gourmet meal, we've got you covered.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="mb-6 md:mb-0">
            <img src="https://via.placeholder.com/150" alt="Delicious Food" className="rounded-full border-4 border-white shadow-lg w-32 h-32 md:w-48 md:h-48 mb-4 mx-auto"/>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-sm mt-2">
              To deliver your favorite meals fresh and fast, straight to your door. We partner with top restaurants to bring you an unparalleled culinary experience.
            </p>
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Chef at Work" className="rounded-full border-4 border-white shadow-lg w-32 h-32 md:w-48 md:h-48 mb-4 mx-auto"/>
            <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
            <p className="text-sm mt-2">
              With our user-friendly app, real-time tracking, and commitment to quality, we ensure that your food is not only delicious but also arrives on time, every time.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <a href="/contact" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
