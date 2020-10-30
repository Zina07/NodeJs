const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});



// Routes
app.get('/', (req, res) => {
  res.send('Beautiful homepage');
});
app.get('/hello', (req, res) => {
    res.send('Hello world!');
});
app.get('/hola', (req, res) => {
    res.send('Hola todos !');
});




