// Importing Express library
const express = require('express');

// Creating instance of Express application
const app = express();

// Defining port for the server to listen on
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Node.js Demo App</h1>
        <p> Deployed using GitHub Actions & Docker</p>
        `);
});

// 404  handler for undefined routes
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        `);
});

// Starting the server
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

