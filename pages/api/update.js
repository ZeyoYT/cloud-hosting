import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, newpassword } = req.body;

    if (!email || !password || !newpassword) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      const client = await clientPromise;
      const db = client.db("flexi-db");

      // Find the user based on email
      const user = await db.collection("users").findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      // Check if the current password matches (plain text comparison)
      if (user.password !== password) {
        return res.status(401).json({ message: 'Incorrect current password.' });
      }

      // Update the password with the new one (plain text)
      const result = await db.collection("users").updateOne(
        { email },
        { $set: { password: newpassword } }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Failed to update password.' });
      }

      res.status(200).json({ message: 'Details updated successfully' });
    } catch (error) {
      console.error('Error updating details:', error);
      res.status(500).json({ message: 'Error updating details' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
