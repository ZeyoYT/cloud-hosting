export default function handler(req, res) {
  if (req.method === 'GET') {
    const plans = [
      { 
        id: 1, 
        name: 'Shared Hosting', 
        price: '$10/month', 
        features: [
          'Affordable best webhosting', 
          'Free SSL Certificate', 
          '24/7 Support', 
          '1 Website', 
          '50 GB SSD Storage'
        ] 
      },
      { 
        id: 2, 
        name: 'VPS', 
        price: '$20/month', 
        features: [
          'Simple and cost-effective compute power', 
          'Full Root Access', 
          'Dedicated IP', 
          'Scalable Resources', 
          'Managed Services'
        ] 
      },
      { 
        id: 3, 
        name: 'WordPress Hosting', 
        price: '$8/month', 
        features: [
          'Powerful managed WordPress Hosting', 
          'Automatic WordPress Updates', 
          'Free Daily Backups', 
          'Enhanced Security', 
          'Optimized for Speed'
        ] 
      }
    ];
    res.status(200).json(plans);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
