# TLV300 Full Stack WHOIS Domain Lookup

This is a full-stack application that allows users to retrieve **WHOIS domain information** and **contact details** using the [WhoisXML API](https://www.whoisxmlapi.com/). It consists of a Node.js/Express backend and a React.js frontend.

---

## 📦 Project Structure
```
TLV300_Assignment/
├── backend/ # Express backend (API integration)
│ ├── server.js
│ ├── .env
│ └── package.json
├── frontend/ # React frontend (SPA UI)
│ ├── src/
│ │ ├── App.js
│ │ ├── App.css
│ │ └── components/WhoisForm.jsx
└── README.md
```

---

## 🚀 Features

- Look up domain registration & expiration info
- Look up contact details like registrant/admin emails
- Select between domain info or contact info
- Handles errors and invalid domains gracefully
- Styled with CSS for a clean look
- Works on `localhost` (5000 for backend, 3000 for frontend)

---

## 🔧 Technologies Used

- **Frontend**: React.js (SPA)
- **Backend**: Node.js, Express
- **Styling**: CSS
- **API**: WhoisXML REST API
- **HTTP Client**: Axios

---

## 🛠️ Setup Instructions

### ⚙️ 1. Backend Setup

```bash
cd TLV300_Assignment/backend
npm install
```
Create a file named .env in the backend/ directory:
WHOIS_API_KEY=your_api_key_here
Then run the server:
```bash
node server.js
```
This will start the backend at:
http://localhost:5000

### 🎨 2. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```
This will start the React app at:
http://localhost:3000

🧪 How to Use
1. Enter a valid domain name (e.g. amazon.com)
2. Select the type of data:

 -   Domain Information
 -   Contact Information

4. Click “Lookup”
5. View results in a table format.

⚠️ Notes
- Do NOT commit your .env file with the API key. It's already excluded in .gitignore.

- If using amazon.com for testing, you will see data like this:
```
Domain Name: amazon.com
Registrar: MarkMonitor, Inc.
Registration Date: 1994-11-01
Age: 30 years
```
📤 Submission
Please include the following:

- ✅ Public GitHub repository link (include this README)

- ✅ Code for both backend and frontend

- ✅ Clear instructions for setup

- ✅ Optional: Add screenshots in a screenshots/ folder

🔗 Resources
- Whois API Docs

- React Docs

- Node.js

- Axios

