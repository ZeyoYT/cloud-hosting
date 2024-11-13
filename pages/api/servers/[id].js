import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;
  const { db } = await connectToDatabase();

  if (req.method === 'PUT') {
    const { status } = req.body;
    await db.collection('servers').updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );
    res.status(200).json({ message: 'Server status updated' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
