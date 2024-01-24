const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'formDB';
const collectionName = 'formSubmissions';

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming JSON requests
app.use(bodyParser.json());

// Parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post('/submit-form', async (req, res) => {
  const { name, email, message } = req.body;

  // MongoDB connection
  const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert form data into the MongoDB collection
    await collection.insertOne({ name, email, message });

    // Respond to the client
    res.json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log('Disconnected from the database');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
