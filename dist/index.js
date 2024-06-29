"use strict";
const express = require('express');
const app = express();
const port = 3000;
// Middleware for logging
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});
// Route for the home page
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
// Route for the about page
app.get('/about', (req, res) => {
    res.send('About Page');
});
// Route for the contact page
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
