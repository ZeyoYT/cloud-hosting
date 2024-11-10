"use client";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos'; 

const AboutPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-container text-white min-h-screen p-6">
            <header className="about-header text-center py-10" data-aos="fade-down">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-indigo-300">
                    About Us
                </h1>
            </header>
            <section className="about-content max-w-4xl mx-auto space-y-10">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed" data-aos="fade-up">
                    Welcome to our web hosting service! We provide reliable and affordable hosting solutions for
                    businesses of all sizes. Our mission is to help you succeed online with top-notch performance
                    and customer support.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    Our platform is built with the latest technology to ensure your website is always running smoothly.
                    We offer a variety of hosting plans to meet your needs, whether you're just starting out or looking
                    to scale your business. Our team is dedicated to providing you with the best possible experience.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                    At Cloud Hosting, we pride ourselves on delivering exceptional service and support. Our goal is to
                    provide you with the tools and resources you need to succeed online. Whether you're a small business
                    owner or a large enterprise, we have the perfect hosting solution for you.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                    Join thousands of satisfied customers who trust Cloud Hosting for their web hosting needs. Experience
                    the difference with our cutting-edge technology, reliable performance, and outstanding customer service.
                </p>
                <div className="meet-the-team space-y-6" data-aos="fade-left">
                    <h2 className="text-3xl font-semibold text-indigo-300 mt-10 border-b-2 border-gray-300 pb-2">Meet the Team</h2>
                    <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {[
                            { name: 'Sushant Kumar Yadav', role: 'CEO', image: '/images/sushant.jpg' },
                            { name: 'Dev Vachhani', role: 'CTO', image: '/images/dev.jpg' },
                            { name: 'Harsh Trivedi', role: 'Lead Developer', image: '/images/harsh.jpg' },
                        ].map((member, index) => (
                            <div key={index} className="team-member text-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-indigo-100 hover:scale-105 transform transition duration-300 ease-out cursor-pointer" data-aos="flip-left" data-aos-delay={`${index * 100}`}>
                                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="our-services space-y-6" data-aos="fade-right">
                    <h2 className="text-3xl font-semibold text-indigo-300 mt-10 border-b-2 border-gray-300 pb-2">Our Services</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {['Shared Hosting', 'VPS Hosting', 'WordPress Hosting'].map((service, index) => (
                            <li key={index} className="text-lg text-black px-4 py-6 bg-gray-100 rounded-lg shadow-md hover:bg-indigo-100 hover:scale-105 transform transition duration-300 ease-out cursor-pointer flex justify-center items-center font-semibold" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="why-choose-us space-y-6" data-aos="fade-up">
                    <h2 className="text-3xl text-indigo-400 font-bold border-b border-indigo-400 inline-block pb-1">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        We offer 24/7 customer support, a 99.9% uptime guarantee, and a 30-day money-back guarantee.
                        Our team of experts is always here to help you with any issues you may encounter.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Our infrastructure is designed for high performance and reliability. We use state-of-the-art
                        data centers and the latest hardware to ensure your website is always up and running. Plus,
                        our easy-to-use control panel makes managing your hosting account a breeze.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
