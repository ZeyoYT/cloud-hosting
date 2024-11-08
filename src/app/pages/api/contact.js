export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
      res.status(200).json({ success: true, message: 'Inquiry received!' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  