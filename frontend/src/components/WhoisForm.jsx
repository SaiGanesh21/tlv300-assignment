import React, { useState } from 'react';
import axios from 'axios';
import './WhoisForm.css';

function WhoisForm() {
  const [domain, setDomain] = useState('');
  const [type, setType] = useState('domain');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.post('http://localhost:5000/api/whois', { domain, type });
      setData(response.data);
    } catch (err) {
      setError('Failed to fetch data. Please check the domain name.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter domain (e.g., amazon.com)"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          required
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="domain">Domain Information</option>
          <option value="contact">Contact Information</option>
        </select>

        <button type="submit">Lookup</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {data && type === 'domain' && (
        <table>
          <thead>
            <tr>
              <th>Domain Name</th>
              <th>Registrar</th>
              <th>Registration Date</th>
              <th>Expiration Date</th>
              <th>Age</th>
              <th>Hostnames</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.domainName}</td>
              <td>{data.registrarName}</td>
              <td>{data.registrationDate}</td>
              <td>{data.expirationDate}</td>
              <td>{data.estimatedDomainAge}</td>
              <td>{data.hostnames}</td>
            </tr>
          </tbody>
        </table>
      )}

      {data && type === 'contact' && (
        <table>
          <thead>
            <tr>
              <th>Registrant Name</th>
              <th>Technical Contact</th>
              <th>Admin Contact</th>
              <th>Contact Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.registrantName}</td>
              <td>{data.technicalContactName}</td>
              <td>{data.adminContactName}</td>
              <td>{data.contactEmail}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default WhoisForm;