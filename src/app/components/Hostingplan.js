"use client";

import { useEffect, useState } from 'react';

export default function HostingPlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/api/plans')
      .then(res => res.json())
      .then(data => setPlans(data));
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
