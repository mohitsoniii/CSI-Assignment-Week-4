const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for loging time and request details.
app.use((req, res, next) => {
  const currTime = new Date().toLocaleString();
  console.log(`[${currTime}] ${req.method} ${req.url}`);
  next();
});


app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!!');
});


app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});


app.use((req, res) => {
  res.status(404).send('404 Not Found: This page does not exist.');
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
