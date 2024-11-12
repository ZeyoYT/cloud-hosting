// pages/api/signup.js

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password, confirmPassword, dob } = req.body;

    if (!name || !email || !password || !confirmPassword || !dob) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      client.close();
      return res.status(409).json({ message: 'User already exists.' });
    }

    const newUser = { name, email, password, dob };
    await db.collection('users').insertOne(newUser);

    client.close();

    res.status(201).json({ message: 'User registered successfully!' });
  }
  
  else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
