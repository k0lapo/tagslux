// server.mjs
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { google } from 'googleapis';

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

app.post('/api/send-to-google-sheet', async (req, res) => {
  const { name, email, address, phone } = req.body;
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[name, email, address, phone]],
      },
    });
    res.status(200).send('User data added to Google Sheet');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to add user data to Google Sheet');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
