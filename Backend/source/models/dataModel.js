// backend/src/models/dataModel.js

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const dataModel = mongoose.model('Data', dataSchema);

module.exports = dataModel;