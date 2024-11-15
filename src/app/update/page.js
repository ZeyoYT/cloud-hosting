"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';

export default function Editdetails() {

  useEffect(() => {
    AOS.init({ duration: 900 });
    document.title = "Edit Details | Cloud Hosting";
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    newpassword: '',
    confirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (formData.newpassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    try {
      const response = await fetch('/api/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,      
          password: formData.password, 
          newpassword: formData.newpassword, 
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update details');
      }

      setSubmitted(true);

      localStorage.removeItem('user');
      window.dispatchEvent(new Event('logout'));
      router.push('/login');
      setTimeout(() => router.push('/login'), 2000);
    } catch (error) {
      setError(error.message);
    }
  };
  
  

  return (
    <div className="flex items-center justify-center text-white p-8">
      <div className="w-full md:w-1/2 bg-gray-900 p-10">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Update Details</h2>
        {submitted && (
          <p className="text-center text-green-400 mb-6">
            Details updated successfully! Redirecting...
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
            <label className="block text-sm font-medium text-blue-500">Current Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 rounded-md bg-gray-800 border border-blue-500 text-blue-400 focus:ring focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-500">New Password</label>
            <input
              type="password"
              name="newpassword"
              value={formData.newpassword}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 rounded-md bg-gray-800 border border-blue-500 text-blue-400 focus:ring focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-500">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 rounded-md bg-gray-800 border border-blue-500 text-blue-400 focus:ring focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-transform transform hover:scale-110 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Submit Changes
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-400">Don't want changes? <a href="/login" className="text-blue-400 hover:underline">Log In</a></p>
        </div>
      </div>
    </div>
  );
}
