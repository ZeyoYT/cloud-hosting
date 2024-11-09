"use client";
import { useState } from 'react';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      console.error('Error submitting the form');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white py-16">
      <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-lg rounded-lg overflow-hidden mb-16 space-y-8 md:space-y-0">
        
        {/* Left Section - Contact Form with Ping Animations */}
        <div className="w-full md:w-1/2 p-8 bg-gray-900 relative">
          <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center md:text-left relative z-10">Contact Us</h2>
          {submitted ? (
            <p className="text-center text-green-400 relative z-10">Thank you for reaching out. We'll get back to you soon!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div>
                <label className="block text-sm font-medium text-blue-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 rounded-md bg-gray-800 border border-blue-500 text-blue-400 focus:ring focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 rounded-md bg-gray-800 border border-blue-500 text-blue-400 focus:ring focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-400">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 rounded-md bg-gray-800 border border-blue-500 text-blue-400 focus:ring focus:ring-blue-500 focus:outline-none h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Background Ping Circle Animations */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500 opacity-20 rounded-full animate-[ping_4s_ease-out_infinite] "></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-blue-700 opacity-20 rounded-full animate-[ping_2s_ease-out_infinite] delay-[3500]"></div>
          <div className="absolute top-20 left-20 w-24 h-24 bg-blue-600 opacity-20 rounded-full animate-[ping_3s_ease-out_infinite] delay-[1000]"></div>
          <div className="absolute bottom-5 left-5 w-36 h-36 bg-blue-400 opacity-15 rounded-full animate-[ping_4s_ease-in-out_infinite]"></div>
        </div>

        {/* Right Section - Animated Text with Additional Ping Circles */}
        <div className="w-full md:w-1/2 bg-gray-800 flex items-center justify-center p-8 relative overflow-hidden">
          <div className="text-center z-10">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">We’re here to help with your cloud hosting needs</h3>
            <p className="text-gray-300">
              Reach out with any inquiries or issues. Our support team is ready to assist.
            </p>
          </div>
          <div className="absolute top-8 left-8 w-16 h-16 bg-blue-500 opacity-20 rounded-full animate-[ping_2s_ease-out_infinite] duration-1000"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-blue-600 opacity-20 rounded-full animate-[ping_4s_ease-out_infinite]"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500 opacity-15 rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-5 left-20 w-36 h-36 bg-blue-400 opacity-15 rounded-full animate-[ping_2s_ease-out_infinite]"></div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl w-full px-4 md:px-0 space-y-8">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-900 rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg">
            <summary className="text-lg font-medium text-blue-300">What is cloud hosting, and how does it work?</summary>
            <p className="text-gray-300 mt-2">
              Cloud hosting uses multiple servers to balance load and maximize uptime. It spreads resources across a cluster of servers, making your website more resilient and scalable.
            </p>
          </details>
          <details className="bg-gray-900 rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg">
            <summary className="text-lg font-medium text-blue-300">What are the benefits of cloud hosting?</summary>
            <p className="text-gray-300 mt-2">
              Cloud hosting offers better scalability, improved reliability, and enhanced performance. It allows you to scale resources as your website grows and provides redundancy, minimizing downtime.
            </p>
          </details>
          <details className="bg-gray-900 rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg">
            <summary className="text-lg font-medium text-blue-300">How secure is cloud hosting?</summary>
            <p className="text-gray-300 mt-2">
              Cloud hosting providers employ advanced security measures, including encryption, firewalls, and regular backups. It's also important to use strong passwords and keep software up to date.
            </p>
          </details>
          <details className="bg-gray-900 rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg">
            <summary className="text-lg font-medium text-blue-300">Can I scale my resources easily with cloud hosting?</summary>
            <p className="text-gray-300 mt-2">
              Yes, cloud hosting makes it easy to scale resources up or down as needed. This flexibility helps you adapt to traffic fluctuations without slowdowns.
            </p>
          </details>
        </div>
      </div><br />
      <Footer />
    </div>
  );
  
 
}