"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Check if the user is already logged in by checking cookies
  useEffect(() => {
    const isLoggedIn = document.cookie.split('; ').some(row => row.startsWith('authToken='));
    if (isLoggedIn) {
      router.push('/'); // Redirect to home if logged in
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Sending login credentials to the backend API
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
      credentials: 'include', // This makes sure the cookie is sent with the request
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ email: '', password: '' });
      router.push('/');  // Redirect to home page after successful login
    } else {
      const result = await response.json();
      setError(result.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900 text-white p-8">
      <div className="flex w-full max-w-4xl shadow-xl rounded-lg overflow-hidden bg-gray-800">
        
        {/* Sidebar */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 flex-col items-center justify-center p-10 text-gray-300">
          <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-pulse">Welcome Back!</h2>
          <p className="text-lg text-center">
            Log in to access your account and continue exploring our resources and features.
          </p>
          <ul className="mt-8 space-y-3">
            <li className="flex items-center gap-2"><span>✓</span> Stay updated with the latest</li>
            <li className="flex items-center gap-2"><span>✓</span> Access personalized content</li>
            <li className="flex items-center gap-2"><span>✓</span> Save your favorite articles</li>
          </ul>
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 bg-gray-900 p-10">
          <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Log In</h2>
          {submitted && (
            <p className="text-center text-green-400 mb-6">
              Login successful!
            </p>
          )}
          {error && (
            <p className="text-center text-red-400 mb-6">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-blue-500">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 rounded-md bg-gray-800 border border-blue-500 text-blue-400 focus:ring focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-500">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 rounded-md bg-gray-800 border border-blue-500 text-blue-400 focus:ring focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-transform transform hover:scale-110 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Log In
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-400">Don't have an account? <a href="/signup" className="text-blue-400 hover:underline">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
