import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-wrap justify-evenly">
                    <div className="w-full md:w-1/4 mb-8">
                        <h2 className="text-2xl font-semibold text-white">Cloud Hosting</h2>
                        <p className="mt-4">
                            Our mission is to make life easier for website developers and their customers. We offer easy-to-use, fast, and reliable web hosting services.
                        </p>
                        <div className="flex space-x-3 mt-4">
                            <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer"><img src="/images/download (1).png" alt="Visa" width={40} height={40} className="w-10" /></a>
                            <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer"><img src="/images/download (2).png" alt="Mastercard" width={40} height={40} className="w-10" /></a>
                            <a href="https://www.paytm.com" target="_blank" rel="noopener noreferrer"><img src="/images/download (3).png" alt="Paytm" width={40} height={40} className="w-10" /></a>
                            <a href="https://pornhub.com" target="_blank" rel="noopener noreferrer"><img src="/images/download (4).png" alt="G Pay" width={40} height={40} className="w-10" /></a>
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
