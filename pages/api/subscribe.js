import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; 
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await client.connect();
      const db = client.db('flexi-db'); 
      const collection = db.collection('subscribers');

      const { email } = req.body;
      if (!email) {
        res.status(400).json({ message: 'Email is required' });
        return;
      }

      const existingSubscriber = await collection.findOne({ email });
      if (existingSubscriber) {
        res.status(400).json({ message: 'Email already subscribed' });
        return;
      }

      const result = await collection.insertOne({ email, subscribedAt: new Date() });
      res.status(201).json({ message: 'Subscribed successfully', subscriberId: result.insertedId });
    } catch (error) {
      console.error('Subscription Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
