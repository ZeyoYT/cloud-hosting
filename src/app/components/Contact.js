"use client";

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
