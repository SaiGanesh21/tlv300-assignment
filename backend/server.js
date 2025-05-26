// We'll begin with the backend using Node.js and Express
// Step 1: Set up backend project structure and basic server
// Directory: backend/

// File: backend/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Helper function to format domain data
function formatDomainData(data) {
  const domainInfo = data.WhoisRecord;
  return {
    domainName: domainInfo.domainName,
    registrarName: domainInfo.registrarName,
    registrationDate: domainInfo.createdDate,
    expirationDate: domainInfo.expiresDate,
    estimatedDomainAge: domainInfo.estimatedDomainAge,
    hostnames: (domainInfo.nameServers?.hostNames || []).join(', ').slice(0, 25)
  };
}

function formatContactData(data) {
  const record = data.WhoisRecord;
  return {
    registrantName: record.registrant?.name || 'N/A',
    technicalContactName: record.technicalContact?.name || 'N/A',
    adminContactName: record.administrativeContact?.name || 'N/A',
    contactEmail: record.contactEmail || 'N/A'
  };
}

app.post('/api/whois', async (req, res) => {
  const { domain, type } = req.body;
  const API_KEY = process.env.WHOIS_API_KEY;
  const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${API_KEY}&domainName=${domain}&outputFormat=JSON`;

  try {
    const response = await axios.get(url);
    const result = type === 'domain' ? formatDomainData(response.data) : formatContactData(response.data);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch WHOIS data.' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
