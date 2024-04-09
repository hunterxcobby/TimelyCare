// pages/api/symptoms.js
export default async function handler(req, res) {
  try {
    // Credentials
    const username = 'Qo6j9_GMAIL_COM_AUT';
    const password = 'Gf8q9T4Ydg7R3Zyo6';
    const token = Buffer.from(`${username}:${password}`).toString('base64');

    const response = await fetch('https://healthservice.priaid.ch/symptoms?format=json&language=en-gb', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching symptoms:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
