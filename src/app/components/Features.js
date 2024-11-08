import React from 'react';

const Features = () => {
    return (
        <section id="feature" className="flex items-center justify-center gap-12 flex-wrap p-4">
            <div className="fe-box w-40 text-left p-4 shadow-md hover:shadow-lg border border-green-200 rounded-md my-4 mx-6">
                <img src="/f2.svg" alt="Free Shipping" className="w-full mb-5" />
                <h6 className="inline-block px-2 py-1 text-green-700 bg-pink-100 rounded">Fastest Service</h6>
            </div>
            <div className="fe-box w-40 text-center p-4 shadow-md hover:shadow-lg border border-green-200 rounded-md my-4 mx-6">
                <img src="/f3.svg" alt="Online Order" className="w-full mb-5" />
                <h6 className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded">Save Money with US</h6>
            </div>
            <div className="fe-box w-40 text-right p-4 shadow-md hover:shadow-lg border border-green-200 rounded-md my-4 mx-6">
                <img src="/f6.svg" alt="Save Money" className="w-full mb-5" />
                <h6 className="inline-block px-2 py-1 text-green-700 bg-blue-100 rounded">24/7 Support</h6>
            </div>
        </section>
    );
};

export default Features;
