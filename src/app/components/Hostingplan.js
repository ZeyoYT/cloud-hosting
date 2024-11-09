"use client";

import { useEffect, useState } from 'react';

export default function HostingPlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/pages/api/plans')
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
    <section id="plans">
      <h1 className="text-5xl font-bold text-center">Our Hosting Plans</h1><br/><br/>
        <ul>
          {plans.map(plan => (
            <li key={plan.id}>
              <h3>{plan.name}</h3>
              <p>{plan.price}</p>
              <ul>{plan.features.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
            </li>
          ))}
        </ul>
    </section>
  );
}
