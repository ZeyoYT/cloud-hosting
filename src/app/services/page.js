"use client";

import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos'; 

export default function ServicePage() {
  const [plans, setPlans] = useState([]);
  const [activePlan, setActivePlan] = useState('free');
  const [ratings, setRatings] = useState({
    free: 4.2,
    premium: 4.8,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });

    fetch('/api/plans')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setPlans(data))
      .catch(error => console.error("Fetch error:", error));
  }, []);

  const handleRating = (plan, rating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [plan]: rating,
    }));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div
            className="bg-gray-800 rounded-lg shadow-md p-8 transition-transform duration-300 ease-in-out transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() => setActivePlan('free')}
          >
            <h2 className="text-4xl font-semibold text-center text-blue-600 mb-6">
              Demo Hosting Plan
            </h2>
            <p className="text-lg text-gray-600 mb-4">Perfect for developers, testing, or small websites.</p>
            <div className="space-y-4">
              <p><strong>Storage:</strong> 1GB SSD</p>
              <p><strong>Bandwidth:</strong> 10GB</p>
              <p><strong>Support:</strong> Basic Support</p>
            </div>
          </div>
          <div
            className="bg-gray-800 rounded-lg shadow-md p-8 transition-transform duration-300 ease-in-out transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() => setActivePlan('premium')}
          >
            <h2 className="text-4xl font-semibold text-center text-blue-600 mb-6">
              Premium Hosting Plan
            </h2>
            <p className="text-lg text-gray-600 mb-4">Ideal for businesses or high-traffic websites.</p>
            <div className="space-y-4">
              <p><strong>Storage:</strong> 20GB SSD</p>
              <p><strong>Bandwidth:</strong> Unlimited</p>
              <p><strong>Support:</strong> 24/7 Premium Support</p>
            </div>
          </div>
        </div>
        <div className="mt-16 space-y-12">
          <div
            className="bg-gray-800 rounded-lg shadow-md p-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
              Demo Hosting
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Free VPS Hosting</h3>
                <p className="text-gray-500">
                  Our Free VPS Hosting plan provides limited but reliable server performance for developers and testers. It is perfect for small, non-commercial projects, offering a chance to explore and experiment with VPS hosting without any cost. The resources are shared with other users, meaning the performance may vary during peak usage times, but it's an excellent way to get familiar with virtual server management.
                </p>
                <p className="text-gray-500">
                  Features:
                  <ul className="list-disc pl-6">
                    <li>1 vCPU</li>
                    <li>512MB RAM</li>
                    <li>10GB of storage</li>
                    <li>Basic support and security features</li>
                  </ul>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Free Shared Hosting</h3>
                <p className="text-gray-500">
                  Our Free Shared Hosting plan gives you the essentials for hosting a personal website or blog. You get 1GB of storage and up to 10GB of bandwidth, enough for smaller projects. However, since resources are shared, performance may fluctuate. It's an ideal choice for hobbyists or anyone looking to start a small, static website.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Free WordPress Hosting</h3>
                <p className="text-gray-500">Get started with WordPress for free. This plan provides 1GB of storage and comes pre-installed with the WordPress CMS. It includes basic themes and plugins but lacks advanced customization options, scalability, and enhanced security. It’s ideal for testing WordPress or launching a simple personal blog. You’ll also receive access to a basic support system and regular updates. Advanced features such as SSL certificates, performance optimization, and automated backups are only available in paid versions.</p>
              </div>
            </div>
          </div>

          <div
            className="bg-gray-800 rounded-lg shadow-md p-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
              Premium Hosting
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Premium VPS Hosting</h3>
                <p className="text-gray-500">
                  The Premium VPS Hosting plan provides unmatched server performance, ideal for businesses, e-commerce sites, or any project requiring high-speed and reliability. You have full control with root access, enabling you to install custom software, configure security settings, and optimize performance for your specific needs.
                </p>
                <p className="text-gray-500">
                  Features:
                  <ul className="list-disc pl-6">
                    <li>2 vCPUs</li>
                    <li>4GB RAM</li>
                    <li>40GB of SSD storage</li>
                    <li>Full root access</li>
                    <li>24/7 premium support</li>
                    <li>Advanced security and monitoring tools</li>
                  </ul>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Premium Shared Hosting</h3>
                <p className="text-gray-500">
                  Our Premium Shared Hosting offers more power and flexibility for medium-to-large websites. With unlimited bandwidth and 20GB of SSD storage, this plan ensures fast performance and reliable uptime, along with the tools needed for growing your site.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Optimized WordPress Hosting</h3>
                <p className="text-gray-500">Our Optimized WordPress Hosting is designed for performance and security. This plan includes automatic updates, daily backups, free SSL certificates, and access to advanced caching systems, ensuring that your WordPress site loads quickly and securely. It comes with 10GB of SSD storage, unlimited bandwidth, and enhanced security features, such as malware scanning and firewall protection. Ideal for professional bloggers, e-commerce stores, and high-traffic content websites.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
