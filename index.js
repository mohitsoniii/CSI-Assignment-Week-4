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


// Route for Managing Profile 
const profileRoutes = require('./Routes/profileRoutes');
app.use('/profile',profileRoutes);

// Route for different Feed Pages
const feedRoutes = require('./Routes/feedRoutes')
app.use('/feed',feedRoutes);


app.use((req, res) => {
  res.status(404).send('404 Not Found: This page does not exist.');
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
