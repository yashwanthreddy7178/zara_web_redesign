import React from 'react';

const Newsletter = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-2">Follow the latest trends</h2>
                    <p className="text-gray-600 mb-6">With our daily newsletter</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <button
                            type="submit"
                            className="bg-gray-900 text-white px-6 py-2 rounded-r-md hover:bg-gray-800 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

