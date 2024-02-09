// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/get-info', (req, res) => {
//   // Access headers from req.headers
//   const userAgent = req.headers['user-agent'];
//   const acceptLanguage = req.headers['accept-language'];

//   res.json({
//     userAgent,
//     acceptLanguage,
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
//server.js
// Import the express module
// app.js
const express = require("express");
// ... rest of the code

const express = require("express");

// Create an instance of the express application
const app = express();

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello, this is the root/main route!");
});

// Define another route for "/api" with JSON response
app.get("/api", (req, res) => {
  res.json({ message: "This is the API route." });
});

// Define a route with URL parameters
app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Start the server on port 3000
console.log("Script is running!");

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
