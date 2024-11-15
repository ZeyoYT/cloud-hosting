import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const { userId } = req.query;
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  
  if (req.method === 'GET') {
    const servers = await db.collection('services').find({ userId }).toArray();
    res.status(200).json(servers);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
