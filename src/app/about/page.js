import React from 'react';

const AboutPage = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Us</h1>
            </header>
            <section className="about-content">
                <p>
                    Welcome to our web hosting service! We provide reliable and affordable hosting solutions for businesses of all sizes. Our mission is to help you succeed online with top-notch performance and customer support.
                </p>
                <h2>Our Services</h2>
                <ul>
                    <li>Shared Hosting</li>
                    <li>VPS Hosting</li>
                    <li>WordPress Hosting</li>
                </ul>
                <h2>Why Choose Us?</h2>
                <p>
                    We offer 24/7 customer support, a 99.9% uptime guarantee, and a 30-day money-back guarantee. Our team of experts is always here to help you with any issues you may encounter.
                </p>
            </section>
        </div>
    );
};

export default AboutPage;