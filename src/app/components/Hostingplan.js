"use client";

import { useEffect, useState } from 'react';

export default function HostingPlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
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

  return (
    <section id="plans" className="py-10 px-4">
      <h1 className="text-5xl font-bold text-center mb-8">Our Hosting Plans</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {plans.map(plan => (
          <div
            key={plan.id}
            className="bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-xl text-blue-600 font-bold mb-4">{plan.price}</p>
            <ul className="space-y-2 text-gray-700">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
