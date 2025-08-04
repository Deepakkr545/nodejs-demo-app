// Importing Express library
const express = require('express');

// Creating instance of Express application
const app = express();

// Defining port for the server to listen on
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.send(`
        <html lang="en">
<head>
  <title>Welcome | Node.js App</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to right, #4facfe, #00f2fe);
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.2rem;
      margin-top: 0;
    }

    .container {
      background-color: rgba(0, 0, 0, 0.3);
      padding: 2rem 3rem;
      border-radius: 20px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    .emoji {
      font-size: 2rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to My Node.js App</h1>
    <p>Deployed using <strong>GitHub Actions</strong> & <strong>Docker</strong></p>
  </div>
</body>
</html>
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

