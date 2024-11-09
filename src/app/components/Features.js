import React from 'react';

const Features = () => {
    return (
        <section id="feature" className="p-8">
            <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center text-gray-300">
                <div className="fe-box p-6 shadow-lg hover:shadow-xl bg-gray-800 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <img src="/f2.svg" alt="Fastest Service" className="w-16 h-16 mx-auto mb-4" />
                    <h6 className="text-xl font-semibold mb-2 text-green-500">Fastest Service</h6>
                    <p className="text-sm">Experience lightning-fast speeds with our optimized hosting solutions.</p>
                </div>

                <div className="fe-box p-6 shadow-lg hover:shadow-xl bg-gray-800 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <img src="/f3.svg" alt="Save Money" className="w-16 h-16 mx-auto mb-4" />
                    <h6 className="text-xl font-semibold mb-2 text-green-500">Save Money with Us</h6>
                    <p className="text-sm">Affordable hosting plans without compromising on quality and performance.</p>
                </div>

                <div className="fe-box p-6 shadow-lg hover:shadow-xl bg-gray-800 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <img src="/f6.svg" alt="24/7 Support" className="w-16 h-16 mx-auto mb-4" />
                    <h6 className="text-xl font-semibold mb-2 text-green-500">24/7 Support</h6>
                    <p className="text-sm">Our dedicated support team is available around the clock to assist you.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
