// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.get('/user(name)?', (req, res) => {
    res.send('Matching /user and /username');
  });
  
 
  app.use((req, res) => {
    res.status(404).send('404 - Not Found');
  });
  
 
  