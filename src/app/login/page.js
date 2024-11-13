"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Aos from 'aos';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 900 });
    document.title = "Login | Cloud Hosting";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error((await response.json()).message);
      }

      localStorage.setItem('user', JSON.stringify({ email: formData.email }));
      setSubmitted(true);
      
      window.dispatchEvent(new Event('login'));
      setTimeout(() => router.push('/'), 2000); // Redirect to dashboard on successful login
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900 text-white p-8">
      <div className="flex w-full max-w-4xl shadow-xl rounded-lg overflow-hidden bg-gray-800" data-aos="zoom-x-out">
        
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
            <p className="text-gray-400">Don't have an account? <Link href="/signup" className="text-blue-400 hover:underline">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
