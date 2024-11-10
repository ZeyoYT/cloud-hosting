import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db();

    // Find the user in the database
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Set the token as an HTTP-only cookie
    res.setHeader('Set-Cookie', serialize('authToken', token, {
      httpOnly: true, // Ensures the cookie is not accessible by JavaScript
      secure: process.env.NODE_ENV === 'production', // Ensures the cookie is only sent over HTTPS in production
      maxAge: 3600, // 1 hour expiration
      path: '/', // Cookie is available throughout the entire app
      sameSite: 'lax', // CSRF protection
    }));

    // Respond with success message (no need to send token in the response body)
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
