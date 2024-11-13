"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
     };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

    const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });

    if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
    } else {
        const result = await response.json();
        setMessage(result.message || 'Subscription failed');}
    };
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Company Info */}
                    <div className="w-full md:w-1/4 mb-8">
                        <h2 className="text-2xl font-semibold text-white">Cloud Hosting</h2>
                        <p className="mt-4 text-gray-400">
                            Our mission is to make life easier for developers and their customers by providing easy-to-use, fast, and reliable web hosting services.
                        </p>
                        <div className="flex space-x-3 mt-4 ">
                            <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/download (1).png" alt="Visa" width={40} height={40} className="w-10 h-10 object-cover" />
                            </a>
                            <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/download (2).png" alt="Mastercard" width={40} height={40} className="w-10 h-10 object-cover" />
                            </a>
                            <a href="https://www.paytm.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/download (3).png" alt="Paytm" width={40} height={40} className="w-10 h-10 object-cover" />
                            </a>
                            <a href="https://pay.google.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/download (4).png" alt="G Pay" width={40} height={40} className="w-10 h-10 object-cover" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-3/4 flex flex-wrap justify-evenly">
                        <div className="text-left w-1/2 sm:w-1/4 mb-8">
                            <h3 className="font-semibold text-white mb-4">Domains</h3>
                            <ul className="text-gray-400">
                                <li><a href="https://www.hostinger.in/domain-name-search" className="hover:text-blue-600">Domain Checker</a></li>
                                <li><a href="#" className="hover:text-blue-600">Domain Transfer</a></li>
                            </ul>
                        </div>
                        <div className="text-left w-1/2 sm:w-1/4 mb-8">
                            <h3 className="font-semibold text-white mb-4">Company</h3>
                            <ul className="text-gray-400">
                                <li><a href="/about" className="hover:text-blue-600">About Cloud Hosting</a></li>
                                <li><a href="/support" className="hover:text-blue-600">Contact Us</a></li>
                                <li><a href="/career" className="hover:text-blue-600">Careers</a></li>
                            </ul>
                        </div>
                        <div className="text-left w-1/2 sm:w-1/4 mb-8">
                            <h3 className="font-semibold text-white mb-4">Resources</h3>
                            <ul className="text-gray-400">
                                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                                <li><a href="#" className="hover:text-blue-600">Status</a></li>
                            </ul>
                        </div>
                        <div className="text-left w-1/2 sm:w-1/4 mb-8">
                            <h3 className="font-semibold text-white mb-4">Support</h3>
                            <ul className="text-gray-400">
                                <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
                                <li><a href="#" className="hover:text-blue-600">Community</a></li>
                                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/4 mb-8">
                    <h2 className="text-2xl font-semibold text-white">Subscribe to our Newsletter</h2>
                    <p className="mt-4 text-gray-400">
                        Get the latest updates and offers directly in your inbox.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <input
                            type="email"
                            value={email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-md bg-gray-800 border border-blue-500 text-blue-400 focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full mt-3 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        >
                            Subscribe
                        </button>
                    </form>
                    {message && <p className="mt-2 text-center text-blue-400">{message}</p>}
                </div>

                <div className="border-t border-gray-700 pt-6 mt-6 ">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">&copy; 2024 Cloud Hosting LLP. All Rights Reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.x.com" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.discord.com" className="text-gray-400 hover:text-white"><i className="fab fa-discord"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
