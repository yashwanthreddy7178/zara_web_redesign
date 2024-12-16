import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const SignupPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [acceptPrivacy, setAcceptPrivacy] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ fullName, email, password, subscribe, acceptPrivacy });
    };

    const handleGoogleSignup = () => {
        // Implement Google signup logic here
        console.log('Sign up with Google');
    };

    return (
        <div className="min-h-screen bg-login pt-20">
            <Header />
            <div className="flex items-center justify-center h-screen">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="subscribe"
                            checked={subscribe}
                            onChange={() => setSubscribe(!subscribe)}
                            className="mr-2"
                        />
                        <label htmlFor="subscribe" className="text-sm">
                            I wish to receive Zara news on my e-mail
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="acceptPrivacy"
                            checked={acceptPrivacy}
                            onChange={() => setAcceptPrivacy(!acceptPrivacy)}
                            className="mr-2"
                            required
                        />
                        <label htmlFor="acceptPrivacy" className="text-sm">
                            I accept the Privacy Statement
                        </label>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300" aria-label="Sign Up">
                        Sign Up
                    </button>
                    <div className="flex items-center justify-between mt-4">
                        <Link to="/login" className="text-sm text-blue-600 hover:underline">
                            Already have an account? Login
                        </Link>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <button
                            onClick={handleGoogleSignup}
                            className="flex items-center justify-center w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300"
                        >
                            Sign up with Google
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default SignupPage; 