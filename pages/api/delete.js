import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required.' });
        }

        try {
            const client = await clientPromise;
            const db = client.db("flexi-db");

            const user = await db.collection("users").findOne({ email });

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            const result = await db.collection("users").deleteOne({ email });

            if (result.deletedCount === 0) {
                return res.status(500).json({ message: 'Failed to delete the account.' });
            }

            await db.collection("posts").deleteMany({ userEmail: email }); 
            await db.collection("comments").deleteMany({ userEmail: email }); 

            res.status(200).json({ message: 'Account and associated data deleted successfully.' });
        } catch (error) {
            console.error('Error deleting account:', error);
            res.status(500).json({ message: 'Error deleting account' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
