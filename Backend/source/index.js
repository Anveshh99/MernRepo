// backend/src/index.js

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017/mydatabase'; // Replace with your MongoDB URI

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

app.use(express.json());
app.use(dataRoutes);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));