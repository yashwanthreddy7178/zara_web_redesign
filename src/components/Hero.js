import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./images/hero-image.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-8 text-center">Black Friday Sale up to 40% off</h1>
        <Link
          to="/ProductPage"
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;

