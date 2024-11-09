"use client";
import React from 'react';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div className="about-container text-white min-h-screen p-6">
            <header className="about-header text-center py-10">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-indigo-300 animate-fade-in">
                    About Us
                </h1>
            </header>
            <section className="about-content max-w-4xl mx-auto space-y-10 animate-fade-in">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Welcome to our web hosting service! We provide reliable and affordable hosting solutions for
                    businesses of all sizes. Our mission is to help you succeed online with top-notch performance
                    and customer support.
                </p>
                <div className="our-services space-y-6">
                    <h2 className="text-3xl font-semibold text-indigo-300 mt-10 border-b-2 border-gray-300 pb-2">Our Services</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                            {['Shared Hosting', 'VPS Hosting', 'WordPress Hosting'].map((service, index) => (
                                <li key={index} className="text-lg text-black px-4 py-6 bg-gray-100 rounded-lg shadow-md hover:bg-indigo-100 hover:scale-105 transform transition duration-300 ease-out cursor-pointer flex justify-center items-center font-semibold">
                                    {service}
                                 </li>
                             ))}
                        </ul>
                </div>
                <div className="why-choose-us space-y-6">
                    <h2 className="text-3xl text-indigo-400 font-bold border-b border-indigo-400 inline-block pb-1">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        We offer 24/7 customer support, a 99.9% uptime guarantee, and a 30-day money-back guarantee.
                        Our team of experts is always here to help you with any issues you may encounter.
                    </p><br />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutPage;
