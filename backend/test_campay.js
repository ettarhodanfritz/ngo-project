require('dotenv').config();
const fetch = require('node-fetch');

async function test() {
  const CAMAPP_ID = process.env.CAMAPP_ID;
  const CAMAPP_USERNAME = process.env.CAMAPP_USERNAME;
  const CAMAPP_PASSWORD = process.env.CAMAPP_PASSWORD;

  if (!CAMAPP_ID || !CAMAPP_USERNAME || !CAMAPP_PASSWORD) {
    console.error('Missing CAMAPP_* env vars. Check backend/.env');
    process.exit(1);
  }

  const payload = {
    amount: 100,
    currency: 'XAF',
    from: '237600000000',
    description: 'test donation',
    external_reference: `test-${Date.now()}`,
  };

  try {
    console.log('Posting to sandbox.campay.net...');
    const res = await fetch('https://sandbox.campay.net/api/v1/payment/initiate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'App-Id': CAMAPP_ID,
        'App-Username': CAMAPP_USERNAME,
        'App-Password': CAMAPP_PASSWORD,
      },
      body: JSON.stringify(payload),
      timeout: 15000,
    });

    console.log('HTTP', res.status, res.statusText);
    let text;
    try { text = await res.text(); } catch(e){ text = '<no body>'; }
    console.log('Body:', text);
  } catch (err) {
    console.error('Fetch error:', err && err.message ? err.message : err);
    if (err && err.code) console.error('Error code:', err.code);
  }
}

if (require.main === module) test();
