export default function handler(req, res) {
    if (req.method === 'GET') {
      const plans = [
        { id: 1, name: 'Shared Hosting', price: '$10/month', features: ['Affordable best webhosting'] },
        { id: 2, name: 'VPS', price: '$20/month', features: ['simple and cost-effective compute power'] },
        { id: 3, name: 'WordPress Hosting', price: '$8/month', features: ['Powerful managed Wordpress Hosting'] },
      ];
      res.status(200).json(plans);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  