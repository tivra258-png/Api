const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Cricket API endpoints
app.get('/', (req, res) => {
  res.json({
    message: 'Cricket API is running!',
    endpoints: {
      matches: '/api/matches',
      matchDetails: '/api/match/:eventId'
    },
    domain: 'api-chi-rouge-91.vercel.app'
  });
});

// Get all cricket matches
app.get('/api/matches', async (req, res) => {
  try {
    const url = "https://central.zplay1.in/pb/api/v1/events/matches/4";
    const response = await axios.get(url);
    
    res.json({
      success: true,
      message: 'Cricket matches fetched successfully',
      data: response.data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching matches:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch matches',
      error: error.message
    });
  }
});

// Get specific match details by event ID
app.get('/api/match/:eventId', async (req, res) => {
  try {
    const { eventId } = req.params;
    
    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: 'Event ID is required'
      });
    }

    const url = `https://central.zplay1.in/pb/api/v1/events/matchDetails/${eventId}`;
    const response = await axios.get(url);
    
    res.json({
      success: true,
      message: 'Match details fetched successfully',
      data: response.data,
      eventId: eventId,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching match details:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch match details',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    availableEndpoints: [
      'GET /',
      'GET /api/matches',
      'GET /api/match/:eventId',
      'GET /api/health'
    ]
  });
});

module.exports = app;
