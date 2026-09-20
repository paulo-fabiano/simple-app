const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello World! Your Node.js application is running successfully.');
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
});
