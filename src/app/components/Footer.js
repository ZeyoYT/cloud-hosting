import React from 'react';
import Image from 'next/image';

const Footer = () => {
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

                <div className="mt-8 mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Subscribe to our newsletter</h3>
                    <p className="text-gray-400 mb-4">Get the latest news and updates from Cloud Hosting.</p>
                    <form className="flex ">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg font-semibold"
                        >
                            Subscribe
                        </button>
                    </form>
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
