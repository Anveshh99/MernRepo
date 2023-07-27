// backend/src/routes/dataRoutes.js

const express = require('express');
const dataModel = require('../models/dataModel');

const router = express.Router();

router.get('/api/data', async (req, res) => {
  try {
    const data = await dataModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

router.post('/api/data', async (req, res) => {
  try {
    const { timestamp, value } = req.body;
    const newData = await dataModel.create({ timestamp, value });
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;