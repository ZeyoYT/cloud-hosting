import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-8">
                        <h2 className="text-2xl font-semibold text-white">Cloud Hosting</h2>
                        <p className="mt-4">
                            Our mission is to make life easier for website developers and their customers. We offer easy-to-use, fast, and reliable web hosting services.
                        </p>
                        <div className="flex space-x-3 mt-4">
                            <img src="/visa.png" alt="Visa" className="w-10" />
                            <img src="/amex.png" alt="Amex" className="w-10" />
                            <img src="/mastercard.png" alt="Mastercard" className="w-10" />
                            <img src="/paypal.png" alt="Paypal" className="w-10" />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-evenly w-full md:w-3/4  ">
                        <div className="text-left w-1/2 sm:w-1/4 mb-8">
                            <h3 className="font-semibold text-white mb-4">DOMAINS</h3>
                            <ul>
                                <li><a href="https://www.hostinger.in/domain-name-search" className="hover:underline">Domain Checker</a></li>
                            </ul>
                        </div>

                        <div className="text-left w-1/2 sm:w-1/4 mb-8">
                            <h3 className="font-semibold text-white mb-4">COMPANY</h3>
                            <ul>
                                <li><a href="/about" className="hover:underline">About Cloud Hosting</a></li>
                                <li><a href="/support" className="hover:underline">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">&copy; 2024 Cloud Hosting LLP. All Rights Reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="www.facebook.com" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="www.x.com" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="www.instagram.com" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="www.discord.com" className="text-gray-400 hover:text-white"><i className="fab fa-discord"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
