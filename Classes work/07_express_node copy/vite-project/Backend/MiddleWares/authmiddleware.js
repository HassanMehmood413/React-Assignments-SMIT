const cors = require('cors');
const express = require('express');

module.exports = function applyMiddleware(app) {
  app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true
  }));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
