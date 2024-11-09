"use client";
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hostingplan from './components/Hostingplan';
import Features from './components/Features';
import Contact from './components/Contact';


export default function Home() {
  useEffect(() => {
    document.title = "Cloud Hosting";
  }, []);

  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      {/* Multiple blinking circles */}
      <div className="absolute bottom-10 left-20 w-10 h-10 bg-blue-400 rounded-full opacity-75 animate-ping duration-[5000ms]"></div>
      <div className="absolute top-16 right-32 w-14 h-14 bg-blue-400 rounded-full opacity-75 animate-ping duration-[7000ms]"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-75 animate-ping duration-[6000ms]"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 bg-blue-400 rounded-full opacity-75 animate-ping duration-[8000ms]"></div>
      <div className="absolute top-40 left-5 w-16 h-16 bg-blue-400 rounded-full opacity-75 animate-ping duration-[7500ms]"></div>

      <div className="flex flex-col items-center text-center h-screen text-white">
        <h1 className="text-5xl font-bold mt-20"><br /><br />Hosting that makes your website fast, and your life easy</h1><br /><br />
        <p className="text-lg mt-4 max-w-xl">
          Elevate your online presence with our VPS hosting solutions, offering unmatched performance and scalability...
        </p>
      </div>

      <Hostingplan />

      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold">Features</h1><br /><br />
        <Features />
      </div>
    </div>
  );
}
