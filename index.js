
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.get('/get', (req, res) => {
    const queryParams = req.query;
    console.log('Query parameters:', queryParams);
    res.send('Query parameters logged. Check the console.');
  });
  
  
  