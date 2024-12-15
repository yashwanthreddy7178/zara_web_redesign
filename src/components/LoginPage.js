import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from './Footer';
import Header from './Header';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    
    const handleLogin = (e) => {
        e.preventDefault();
        // Simple authentication check
        if (username === 'hari123@gmail.com' && password === 'Hari@123') {
            login();
            console.log('User logged in');
            const from = location.state?.from || '/';
            navigate(from);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-login pt-16">
            <Header />
            <div className="flex items-center justify-center h-screen">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300" aria-label="Login">
                        Login
                    </button>
                    <div className="flex items-center justify-between mt-4">
                        <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </Link>
                        <Link to="/signup" className="text-sm text-blue-600 hover:underline">
                            New User? Sign Up
                        </Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage; 