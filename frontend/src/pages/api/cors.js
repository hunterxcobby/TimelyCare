export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Handle different HTTP methods
    if (req.method === 'OPTIONS') {
      // Preflight request
   
      // Handle GET request
      // Your GET logic here
      res.status(200).json({ message: 'GET request received' });
    } else if (req.method === 'POST') {
      // Handle POST request
      // Your POST logic here
      res.status(200).json({ message: 'POST request received' });
    } else {
      // Handle other HTTP methods
      res.status(405).end(); // Method Not Allowed
    }
  }
  