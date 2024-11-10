"use client";
import React, { useEffect } from 'react';
import Hostingplan from './components/Hostingplan';
import Features from './components/Features';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900 });
    document.title = "Cloud Hosting";
  }, []);

  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      <div className="flex flex-col items-center text-center px-6 py-20 lg:px-12" data-aos="fade-up">
        <h1 className="text-4xl lg:text-5xl font-bold leading-snug mt-10">Hosting that makes your website fast and life easy</h1>
        <p className="text-lg mt-4 max-w-2xl">
          Elevate your online presence with our VPS hosting solutions, offering unmatched performance and scalability for websites of all sizes. Our state-of-the-art infrastructure ensures your site is always up and running, providing a seamless experience for your visitors.
        </p>
        <a href="/signup" className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md text-lg font-semibold transition">
          Get Started
        </a>
      </div>

      <section className="py-16" data-aos="fade-right">
        <Hostingplan />
      </section>

      <section className="text-center py-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">Our Features</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Discover the powerful tools and features that make Cloud Hosting a top choice for developers and businesses. From automated backups to advanced security measures, we provide everything you need to keep your site secure and running smoothly.
        </p>
        <Features />
      </section>

      <section className="py-16" data-aos="fade-left">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-8">
          <blockquote className="max-w-md p-6 text-gray-300 bg-gray-800 rounded-md shadow-lg" data-aos="fade-up" data-aos-delay="100">
            "Cloud Hosting made it so easy for us to scale our website. The speed and customer support are unmatched!"
            <footer className="mt-4 text-blue-400">- Het Jasani, CEO of Tech-e</footer>
          </blockquote>
          <blockquote className="max-w-md p-6 text-gray-300 bg-gray-800 rounded-md shadow-lg" data-aos="fade-up" data-aos-delay="200">
            "Amazing service! Our uptime has never been better, and the performance is fantastic."
            <footer className="mt-4 text-blue-400">- Mittha Desai, Freelancer</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
