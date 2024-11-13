import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  const { userId } = req.query;
  const { db } = await connectToDatabase();
  
  if (req.method === 'GET') {
    const servers = await db.collection('servers').find({ userId }).toArray();
    res.status(200).json(servers);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
