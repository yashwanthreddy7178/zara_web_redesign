import React from 'react';

const NewCollections = () => {
  return (
    <section className="relative h-screen bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./images/new-collections.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-6xl font-bold mb-8 text-center">New Collections</h2>
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Shop Collection
        </button>
      </div>
    </section>
  );
};

export default NewCollections;

