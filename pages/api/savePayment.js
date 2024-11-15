import { UUID } from 'mongodb';
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, type, email, amount, upiId } = req.body;

            const client = await clientPromise;
            const db = client.db("flexi-db");

            const result = await db.collection("payments").insertOne({
                name,
                type,
                email,
                amount,
                upiId,
                createdAt: new Date()
            });

            const vps = await db.collection("services").insertOne({
                email,
                type,
                createdAt: new Date()
            });
            
            res.status(200).json({ message: 'Payment saved successfully', data: result });
        } catch (error) {
            res.status(500).json({ message: 'Error saving payment', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
