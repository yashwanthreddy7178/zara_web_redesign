import React from 'react';

const JoinLife = () => {
  return (
    <section className="relative h-screen bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./images/join-life.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-6xl font-bold mb-8 text-center">Join Life</h2>
        <div className="text-center max-w-md">
          <p style={{ fontSize: 'smaller' }}>
            JOIN LIFE REPRESENTS A PROCESS OF CONTINUOUS IMPROVEMENT, OF CONSTANTLY QUESTIONING OURSELVES WHAT WE SHOULD BE DOING TO ADVANCE TO A MORE SUSTAINABLE MODEL. WE KNOW THAT THE ROAD IS COMPLEX, BUT WE BELIEVE IN THE INDUSTRY’S POWER OF TRANSFORMATION. AS SUCH, OUR SOCIAL AND ENVIRONMENTAL OBJECTIVES HAVE BECOME MORE RIGOROUS TO BE ABLE TO KEEP IMPROVING.
          </p>
        </div>
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default JoinLife;

