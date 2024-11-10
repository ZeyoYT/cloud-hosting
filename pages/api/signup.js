// pages/api/signup.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Set this in .env.local
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to the database
      await client.connect();
      const db = client.db('db-flexi'); // Replace with your DB name
      const collection = db.collection('users'); // Replace with your collection name

      // Check if the user already exists
      const { email, name, password, dob } = req.body;
      const existingUser = await collection.findOne({ email });

      if (existingUser) {
        res.status(400).json({ message: 'Email already in use' });
        return;
      }

      // Insert the new user
      const result = await collection.insertOne({
        name,
        email,
        password, // Normally you'd hash passwords before saving them
        dob,
      });

      res.status(201).json({ message: 'User registered successfully', userId: result.insertedId });
    } catch (error) {
      console.error('Signup Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
